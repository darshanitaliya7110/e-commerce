// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyzr2R6LSanqtoa5fX-43KBJ-x4PXlhbs",
  authDomain: "e-commerce-48549.firebaseapp.com",
  projectId: "e-commerce-48549",
  storageBucket: "e-commerce-48549.appspot.com",
  messagingSenderId: "769559855850",
  appId: "1:769559855850:web:82c778984efc4efe5ccd93",
  measurementId: "G-W1KEX92BBP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
