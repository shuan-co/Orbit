import React from "react";
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app';

import "./login.css";

const firebaseConfig = {
  apiKey: "AIzaSyA5KuVKg7vp6OuIBMYSgbsxWizMZhqKNmw",
  authDomain: "orbit-90a9a.firebaseapp.com",
  projectId: "orbit-90a9a",
  storageBucket: "orbit-90a9a.appspot.com",
  messagingSenderId: "355762773896",
  appId: "1:355762773896:web:bd8c63fa6d57499427643d",
  measurementId: "G-PVEBSYX62E"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

var user = null;

function Login({ logIn }) {
  const navigate = useNavigate(); // Move useNavigate inside the Login component

  const login = (event) => {
    event.preventDefault();

    var email = document.getElementById("container-auth-right-email-login").value;
    var password = document.getElementById("container-auth-right-password-login").value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        user = userCredential.user;
        navigate('/chatspace'); // Use the navigate function here
        logIn();
        console.log("hello world!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <>
      <div id="container-login">
        <img
          id="background-login"
          src="./authentication/login/loginbg.png"
          alt=""
        />

        <div id="container-auth-login">
          <div id="container-auth-left-login">
            <img
              id="container-auth-leftbg-login"
              className="floating"
              src="./authentication/login/leftbg.png"
              alt=""
            />
            <img
              id="container-auth-leftbgshadow-login"
              className="floating"
              src="./authentication/login/leftbgshadow.png"
              alt=""
            />
            <p id="container-auth-left-quote-login">
              UNLEASH YOUR <br /> COSMIC CREATIVITY.
            </p>
          </div>
          <div id="container-auth-right-login">
            <div>
              <img
                id="container-auth-right-iconright-login"
                src="./authentication/login/righticon.png"
                alt=""
              />
              <p id="container-auth-right-header-login">Welcome Aboard!</p>
              <p id="container-auth-right-lower-login">
                What are your plans today, traveler?
              </p>
              <form onSubmit={login} id="container-auth-right-form-login">
                <label
                  id="container-auth-right-label-login"
                  htmlFor="container-auth-right-email-login"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="gmail"
                  className="container-auth-right-input-login"
                  id="container-auth-right-email-login"
                  placeholder="sample@gmail.com"
                  required="true"
                />
                <label
                  id="container-auth-right-label-login"
                  htmlFor="container-auth-right-password-login"
                >
                  Password
                </label>
                <input
                  type="password"
                  name=""
                  placeholder="Minimum 8 characters"
                  className="container-auth-right-input-login"
                  id="container-auth-right-password-login"
                  required="true"
                  min={8}
                />
                {/* <a
                  id="container-auth-right-submit-login"
                  href="../../../OrbitHtml.html"
                >
                  Submit
                </a> */}
                <input id="container-auth-right-submit-login" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
