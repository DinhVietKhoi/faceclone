// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNkWy8-9fJ_kySsgfWI_xttLyq53g0wBo",
  authDomain: "faceclone-7108a.firebaseapp.com",
  databaseURL: "https://faceclone-7108a-default-rtdb.firebaseio.com",
  projectId: "faceclone-7108a",
  storageBucket: "faceclone-7108a.appspot.com",
  messagingSenderId: "12655981992",
  appId: "1:12655981992:web:c6d4f7d6755c97bcdbd99d",
  measurementId: "G-Y32FBCKVG3"
  // apiKey: process.env.REACT_APP_API,
  // authDomain: process.env.REACT_APP_AUTH,
  // databaseURL: process.env.REACT_APP_DATABASE,
  // projectId: process.env.REACT_APP_PROJECT,
  // storageBucket: process.env.REACT_APP_STORAGE,
  // messagingSenderId: process.env.REACT_APP_MESS,
  // appId: process.env.REACT_APP_APP,
  // measurementId: process.env.REACT_APP_MEAS
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export default db;
