import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-4916d.firebaseapp.com",
  projectId: "reactchat-4916d",
  storageBucket: "reactchat-4916d.appspot.com",
  messagingSenderId: "244098227122",
  appId: "1:244098227122:web:1b98197868c832d6e722ab"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()