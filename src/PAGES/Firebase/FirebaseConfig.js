// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbv6WX-WNQt2XB8PFx1tkgdOJcmJQ_jag",
  authDomain: "for-config-and-authentication.firebaseapp.com",
  projectId: "for-config-and-authentication",
  storageBucket: "for-config-and-authentication.appspot.com",
  messagingSenderId: "73195225696",
  appId: "1:73195225696:web:62c24b52587987d49fb905",
  measurementId: "G-0QMGSP3HED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);