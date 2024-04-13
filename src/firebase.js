// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBc6enwE3hTrrB9Hue1rM464d37_bytdBM",
  authDomain: "chatt-4dd36.firebaseapp.com",
  projectId: "chatt-4dd36",
  storageBucket: "chatt-4dd36.appspot.com",
  messagingSenderId: "957298944842",
  appId: "1:957298944842:web:e1a529d9e53c93037cafb3",
  measurementId: "G-6GY4DBYSX9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()