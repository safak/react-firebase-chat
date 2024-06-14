import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "lamareactchat-b049c.firebaseapp.com",
  projectId: "lamareactchat-b049c",
  storageBucket: "lamareactchat-b049c.appspot.com",
  messagingSenderId: "434295471180",
  appId: "1:434295471180:web:5e40205cee6bbdbc4588e9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();