import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_API_KEY,
  apiKey: "AIzaSyDvR50vicQ9RW30AKfZdpBsAnTp-wO5O5M",
  authDomain: "real-time-chat-ccdf3.firebaseapp.com",
  projectId: "real-time-chat-ccdf3",
  storageBucket: "real-time-chat-ccdf3.appspot.com",
  messagingSenderId: "681829181844",
  appId: "1:681829181844:web:7732c5d24577489a79c781",
  measurementId: "G-C77S3TZ2FF",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
