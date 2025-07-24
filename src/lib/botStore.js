import { doc, getDoc } from "firebase/firestore";
import { create } from "zustand";
import { db } from "./firebase";

export const useBotStore = create((set) => ({
  currentBot: null,
  isLoading: true,
  fetchUserInfo: async (uid) => {
    if (!uid) return set({ currentBot: null, isLoading: false });

    try {
      const docRef = doc(db, "bots", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        set({ currentBot: docSnap.data(), isLoading: false });
      } else {
        set({ currentBot: null, isLoading: false });
      }
    } catch (err) {
      console.log(err);
      return set({ currentBot: null, isLoading: false });
    }
  },
}));