import {
  doc,
  getDoc,
  updateDoc,
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { create } from "zustand";
import { db } from "./firebase";
import { useUserStore } from "./userStore";
import { useBotStore } from "./botStore";

export const useChatStore = create((set, get) => ({
  chatId: null,
  participants: [],
  users: {},
  isCurrentUserBlocked: false,
  isReceiverBlocked: false,

  changeChat: async (chatId) => {
    const currentUser = useUserStore.getState().currentUser;
    const currentBot = useBotStore.getState().currentBot;

    const snap = await getDoc(doc(db, "chats", chatId));
    const data = snap.data() || {};
    const participants = data.participants || [];

    const botId = `bot_${chatId}`;
    if (participants.length === 1 && !participants.includes(botId)) {
      const newParts = [...participants, botId];
      await updateDoc(doc(db, "chats", chatId), { participants: newParts });
      participants.push(botId);
    }

    set({ chatId, participants });

    // fetch all profiles—this will load your bot under UID “bot_<chatId>”
    const users = {};
    await Promise.all(
      participants.map(async (uid) => {
        const col = uid.startsWith("bot_") ? "bots" : "users";
        const docSnap = await getDoc(doc(db, col, uid));
        if (docSnap.exists()) users[uid] = docSnap.data();
      })
    );
    set({ users });

    // determine block flags
    const selfId = currentUser?.id;
    // all other participants
    const others = participants.filter(uid => uid !== selfId);

    // is self blocked by any other? (they blocked self)
    const isCurrentUserBlocked = others.some(uid => {
      const p = users[uid];
      return p?.blocked?.includes(selfId);
    });

    // has self blocked any other? (self blocked them)
    const isReceiverBlocked = others.some(uid => {
      return currentUser?.blocked?.includes(uid);
    });

    set({ isCurrentUserBlocked, isReceiverBlocked });
  },

  changeBlock: () => {
    set(state => ({ isReceiverBlocked: !state.isReceiverBlocked }));
  },

  resetChat: () => set({
    chatId: null,
    participants: [],
    users: {},
    isCurrentUserBlocked: false,
    isReceiverBlocked: false,
  }),
}));
