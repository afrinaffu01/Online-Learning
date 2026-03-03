// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcL5_Gk8cgXRVlkvs3q0UF-Ka3P8XnMW8",
  authDomain: "online-learning-f7455.firebaseapp.com",
  projectId: "online-learning-f7455",
  storageBucket: "online-learning-f7455.firebasestorage.app",
  messagingSenderId: "1032324089064",
  appId: "1:1032324089064:web:6b0978e0df143e7619b55d",
  measurementId: "G-0NJ5KJQ7LS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);