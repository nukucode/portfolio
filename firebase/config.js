import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCm_kI_cDOVVWTD-MSLEq6CXalDbLldFi4",
  authDomain: "therogersak333.firebaseapp.com",
  projectId: "therogersak333",
  storageBucket: "therogersak333.appspot.com",
  messagingSenderId: "20717206319",
  appId: "1:20717206319:web:2a17f3cc97775e691cffda",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
