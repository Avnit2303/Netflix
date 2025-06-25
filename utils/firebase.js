// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhGplmjduEVT8y5oPCsJiT7qUemFhPtMA",
  authDomain: "netflix-gpt-420f7.firebaseapp.com",
  projectId: "netflix-gpt-420f7",
  storageBucket: "netflix-gpt-420f7.firebasestorage.app",
  messagingSenderId: "848202359861",
  appId: "1:848202359861:web:763c5a1ff4ba8c3fa9fd7c",
  measurementId: "G-WK249HS3T8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();