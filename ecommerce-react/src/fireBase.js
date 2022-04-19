// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_7zt5qDfrTSAhmxcAGYjpMtpc33AYCGA",
  authDomain: "ecommerce-react-felipe-vasquez.firebaseapp.com",
  projectId: "ecommerce-react-felipe-vasquez",
  storageBucket: "ecommerce-react-felipe-vasquez.appspot.com",
  messagingSenderId: "401444740592",
  appId: "1:401444740592:web:9c88b71f260decf9a39135"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const RAM = getFirestore(app);

export default RAM