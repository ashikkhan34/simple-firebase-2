// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp50jyDA27UuzUM_XfE8Tc0WLuneoE7lI",
  authDomain: "simple-firebase-2-821e1.firebaseapp.com",
  projectId: "simple-firebase-2-821e1",
  storageBucket: "simple-firebase-2-821e1.firebasestorage.app",
  messagingSenderId: "844675913276",
  appId: "1:844675913276:web:071d5a8ed07670c01d5539"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;