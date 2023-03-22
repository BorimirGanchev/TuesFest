import firebase from "firebase/compat/app";
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

const app = firebase.initializeApp(firebaseConfig);
console.log(app);
