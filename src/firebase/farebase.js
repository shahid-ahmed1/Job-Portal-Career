// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyB-dWyTJ2V4-ytrkj8VjiasHVwUwiJZAeU",
  authDomain: "job-portal-da297.firebaseapp.com",
  projectId: "job-portal-da297",
  storageBucket: "job-portal-da297.firebasestorage.app",
  messagingSenderId: "773170050635",
  appId: "1:773170050635:web:e35facc603266994377fce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app)