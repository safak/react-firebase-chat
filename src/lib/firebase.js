// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXlJXaYgeFnzW8ASrNA0qNIyu6mJ1AveM",
  authDomain: "react-chat-pt-ver1.firebaseapp.com",
  projectId: "react-chat-pt-ver1",
  storageBucket: "react-chat-pt-ver1.firebasestorage.app",
  messagingSenderId: "339929915893",
  appId: "1:339929915893:web:258394594f4824fbf000bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db   = getFirestore();
