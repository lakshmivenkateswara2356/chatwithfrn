// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB9KJSzKGV-CNJ2P-jDKUzuOADeniI95go",
  authDomain: "chating-5cb6f.firebaseapp.com",
  projectId: "chating-5cb6f",
  storageBucket: "chating-5cb6f.appspot.com",
  messagingSenderId: "800042274201",
  appId: "1:800042274201:web:77d2ba7316ccffc49a5708",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()