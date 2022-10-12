// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
 

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSEWuX-UwA5CoqAT1Lnd4mdTWtAtGI1Og",
  authDomain: "react-js-390bc.firebaseapp.com",
  projectId: "react-js-390bc",
  storageBucket: "react-js-390bc.appspot.com",
  messagingSenderId: "1068762799839",
  appId: "1:1068762799839:web:74f5851b52be4b520c136a",
  measurementId: "G-QZWQ2JM99R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)