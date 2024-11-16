// Import necessary Firebase functions
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration object
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "my-resume-b86a9.firebaseapp.com",
  projectId: "my-resume-b86a9",
  storageBucket: "my-resume-b86a9.appspot.com",
  messagingSenderId: "949238679252",
  appId: "1:949238679252:web:1aba86c85f2f0109749d41",
  measurementId: "G-R1SL5TYGR6", // Optional, can omit if not using Analytics
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
