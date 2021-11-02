// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzy0zl4Wy2QNQ34OoEZ9RdnKDlj9pP4eA",
  authDomain: "jobsearch-lcnkim.firebaseapp.com",
  databaseURL: "https://jobsearch-lcnkim.firebaseio.com",
  projectId: "jobsearch-lcnkim",
  storageBucket: "jobsearch-lcnkim.appspot.com",
  messagingSenderId: "1006207533055",
  appId: "1:1006207533055:web:ef8f8d18d069becaa031ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);