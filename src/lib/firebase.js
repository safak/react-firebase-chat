import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: 'reactchat-89e38.firebaseapp.com',
    projectId: 'reactchat-89e38',
    storageBucket: 'reactchat-89e38.appspot.com',
    messagingSenderId: '578071021587',
    appId: '1:578071021587:web:fb64c5893be10719ddd7e6',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
