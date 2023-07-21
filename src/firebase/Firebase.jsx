// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5KuVKg7vp6OuIBMYSgbsxWizMZhqKNmw",
  authDomain: "orbit-90a9a.firebaseapp.com",
  projectId: "orbit-90a9a",
  storageBucket: "orbit-90a9a.appspot.com",
  messagingSenderId: "355762773896",
  appId: "1:355762773896:web:bd8c63fa6d57499427643d",
  measurementId: "G-PVEBSYX62E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in.
    window.user = user;  // global variable to hold the user info
  } else {
    // User is signed out.
    window.user = null;
  }
});

export { db };  // export db to use it in other files
