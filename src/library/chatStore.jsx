import { doc, getDoc } from "firebase/firestore";
import { create } from "zustand";
import { db } from "./firebase";
import { useUserStore } from "./userStore";

export const useChatStore = create((set) => ({
  user: null,
  chatId: null,
  isCurrentUserBlocked: false,
  isReceiverBlocked: false,
  changeChat: (chatId, user) => {
    const currentUser = useUserStore.getState().currentUser;

    // CHECK IF THE CURRENT USER IS BLOCKED

    if (user.blocked.includes(currentUser.id)) {
      return set({
        user: null,
        chatId,
        isCurrentUserBlocked: true,
        isReceiverBlocked: false,
      });
    }

    // CKECK IF THE RECEIVER IS BLOCKED
    else if (currentUser.blocked.includes(user.id)) {
      return set({
        user: user,
        chatId,
        isCurrentUserBlocked: false,
        isReceiverBlocked: true,
      });
    } else {
      return set({
        chatId,
        user,
        isCurrentUserBlocked: false,
        isReceiverBlocked: false,
      });
    }

    changeBlock: () => {
      set((state) => ({
        ...state,
        isReceiverBlocked: !state.isReceiverBlocked,
      }));
    };
  },
}));
