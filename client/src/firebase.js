// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-5f10d.firebaseapp.com",
  projectId: "mern-estate-5f10d",
  storageBucket: "mern-estate-5f10d.firebasestorage.app",
  messagingSenderId: "6608113763",
  appId: "1:6608113763:web:eb25b74cf6f8dd8942e856"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);