// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyDsI3syooggUpF2PRoBn3HUZJ63i9g0Db0",
  authDomain: "peri-3624f.firebaseapp.com",
  projectId: "peri-3624f",
  storageBucket: "peri-3624f.appspot.com",
  messagingSenderId: "844077430083",
  appId: "1:844077430083:web:66e10c10d8aafd6cf76bf6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();