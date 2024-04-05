import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-8953e.firebaseapp.com",
  projectId: "reactchat-8953e",
  storageBucket: "reactchat-8953e.appspot.com",
  messagingSenderId: "989490756392",
  appId: "1:989490756392:web:9e54e92c7b39c531b82e1d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()