// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKmItYuCBNzwpUCCMmd9bGWEijtR0VPzQ",
  authDomain: "nagp-demo-56e77.firebaseapp.com",
  projectId: "nagp-demo-56e77",
  storageBucket: "nagp-demo-56e77.appspot.com",
  messagingSenderId: "937707635917",
  appId: "1:937707635917:web:f04dd2e3b7494d68aa9584",
  measurementId: "G-D76YC4HMV3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export default { app, analytics, auth }