// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArgOxDchbFO7bTusTbzAAcASmwAQGV_v8",
  authDomain: "assignment-10-with-firebase.firebaseapp.com",
  projectId: "assignment-10-with-firebase",
  storageBucket: "assignment-10-with-firebase.appspot.com",
  messagingSenderId: "150834817579",
  appId: "1:150834817579:web:6e93e69bba3c062267586e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;