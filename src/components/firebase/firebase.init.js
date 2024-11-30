// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJkA05VwugWSm8el7d-Hdt6hw11YSCWvE",
  authDomain: "coffee-store-d5520.firebaseapp.com",
  projectId: "coffee-store-d5520",
  storageBucket: "coffee-store-d5520.firebasestorage.app",
  messagingSenderId: "184888259590",
  appId: "1:184888259590:web:223a8a348c75839b5aff87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

