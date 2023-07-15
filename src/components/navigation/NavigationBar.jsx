import "./navigationbar.css";

import { getAuth, signOut } from "firebase/auth";

import { initializeApp } from 'firebase/app';
const firebaseConfig = {
  apiKey: "AIzaSyA5KuVKg7vp6OuIBMYSgbsxWizMZhqKNmw",
  authDomain: "orbit-90a9a.firebaseapp.com",
  projectId: "orbit-90a9a",
  storageBucket: "orbit-90a9a.appspot.com",
  messagingSenderId: "355762773896",
  appId: "1:355762773896:web:bd8c63fa6d57499427643d",
  measurementId: "G-PVEBSYX62E"
}
const firebase = initializeApp(firebaseConfig);


const auth = getAuth();

const logout = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}

console.log(auth.uid);

function NavigationBar() {
  return (
    <>
      <nav
        class="navbar navbar-expand-lg bg-body-tertiary bg-dark"
        data-bs-theme="dark"
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Orbit
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link" aria-current="page" href="/signup">
                Sign Up
              </a>
              <a class="nav-link" href="/Login">
                Login
              </a>
              <button onClick={logout} class="nav-link">Logout</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavigationBar;
