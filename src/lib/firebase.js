import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "testchat-48726.firebaseapp.com",
  projectId: "testchat-48726",
  storageBucket: "testchat-48726.appspot.com",
  messagingSenderId: "951235424572",
  appId: "1:951235424572:web:e3d2d8e5da24970d282e39",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
