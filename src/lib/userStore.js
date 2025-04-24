import { create } from "zustand";

const useUserStore = create((set) => ({
  currentUser: null,
  isloading: true,
  fetchUserInfo: async (uid) => {
    if (!uid) return set({ currentUser: null, isloading: false });

    try {
    } catch (err) {
      console.log(err);
      return set({ currentUser: null, isloading: false });
    }
  },
}));
