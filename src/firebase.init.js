// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAh6Hlq8aOkHPRLAkoTX6SiVL89p4vJOv0",
  authDomain: "fox-it-80c73.firebaseapp.com",
  projectId: "fox-it-80c73",
  storageBucket: "fox-it-80c73.appspot.com",
  messagingSenderId: "73738633883",
  appId: "1:73738633883:web:03e702c4568d71603f7c3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;