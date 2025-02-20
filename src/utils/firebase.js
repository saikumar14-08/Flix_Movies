// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB15wxHwh7BYUNSZfrQNWeWp_1vhmPkscY",
  authDomain: "flixgpt-fa3e1.firebaseapp.com",
  projectId: "flixgpt-fa3e1",
  storageBucket: "flixgpt-fa3e1.firebasestorage.app",
  messagingSenderId: "213458896315",
  appId: "1:213458896315:web:4936a17af2fef41a27b09e",
  measurementId: "G-TNVBYGETVJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics)
export const auth = getAuth();