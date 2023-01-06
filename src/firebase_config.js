import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDv92M_Ku9eMG-nNgWJQfra56eGkWgzkkQ",
  authDomain: "teammate-6ed2f.firebaseapp.com",
  projectId: "teammate-6ed2f",
  storageBucket: "teammate-6ed2f.appspot.com",
  messagingSenderId: "125218266480",
  appId: "1:125218266480:web:db97cfd5e039c8378783b5",
  measurementId: "G-L7FFEBPFX9"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);