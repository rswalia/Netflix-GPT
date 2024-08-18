// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8t9aOAj8CtCRqs4YUv3x4l4Wmr4P1hoE",
  authDomain: "netflix-gpt-practice.firebaseapp.com",
  projectId: "netflix-gpt-practice",
  storageBucket: "netflix-gpt-practice.appspot.com",
  messagingSenderId: "608423234996",
  appId: "1:608423234996:web:89add2a0b7dfc4ebfc76e1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
