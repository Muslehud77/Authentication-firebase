// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTGbrc8tIMSUl0PsQF4C_6cfeQ3Uxd41k",
  authDomain: "auth-mohamilon-d716d.firebaseapp.com",
  projectId: "auth-mohamilon-d716d",
  storageBucket: "auth-mohamilon-d716d.appspot.com",
  messagingSenderId: "435813885463",
  appId: "1:435813885463:web:f7416182b8e923549c5e52",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;