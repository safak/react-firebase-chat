
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyANTYuFcvydbdNOwwCf1zaNYSLxJPYDW90",
  authDomain: "chatapp-dfd0d.firebaseapp.com",
  projectId: "chatapp-dfd0d",
  storageBucket: "chatapp-dfd0d.appspot.com",
  messagingSenderId: "982040362482",
  appId: "1:982040362482:web:4e24dbb1d39a498a063f6b"
};

const app = initializeApp(firebaseConfig);

export { app }

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()