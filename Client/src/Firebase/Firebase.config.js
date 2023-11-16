// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCheSTqXJCtqWjzWMUB_xlb-Ae33nKU5Es",
  authDomain: "shoes-e-commerce-cce5d.firebaseapp.com",
  projectId: "shoes-e-commerce-cce5d",
  storageBucket: "shoes-e-commerce-cce5d.appspot.com",
  messagingSenderId: "480474476002",
  appId: "1:480474476002:web:68434d194dae76dd921dbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;