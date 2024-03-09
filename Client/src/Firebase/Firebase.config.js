// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtYBI3xZLMNLTDjDR2l3V6UJVWPHDT90A",
  authDomain: "shoe-e-commece.firebaseapp.com",
  projectId: "shoe-e-commece",
  storageBucket: "shoe-e-commece.appspot.com",
  messagingSenderId: "338414150965",
  appId: "1:338414150965:web:619b1f9bdeb0d7c172d87c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;