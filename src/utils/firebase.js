// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0ubcBK507pMj7Lp844wAZoHXfPnRh2qg",
  authDomain: "tmdbtalk.firebaseapp.com",
  projectId: "tmdbtalk",
  storageBucket: "tmdbtalk.firebasestorage.app",
  messagingSenderId: "177800567487",
  appId: "1:177800567487:web:c876f6a329af5666f2840a",
  measurementId: "G-YMYSSTGHNR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
