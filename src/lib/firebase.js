import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-85a6b.firebaseapp.com",
  projectId: "reactchat-85a6b",
  storageBucket: "reactchat-85a6b.appspot.com",
  messagingSenderId: "1071825654338",
  appId: "1:1071825654338:web:d0472b38c09ea5cb86d3db",
};

const app = initializeApp(firebaseConfig);
