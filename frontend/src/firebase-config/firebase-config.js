import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBW1qk43LMOvCv5EuChXSCA5p0fTPyc868",

  authDomain: "tuesfest.firebaseapp.com",

  projectId: "tuesfest",

  storageBucket: "tuesfest.appspot.com",

  messagingSenderId: "574059060032",

  appId: "1:574059060032:web:82944ab8b220e2fbbef8a5",

  measurementId: "G-QPKCW6GM4D",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
