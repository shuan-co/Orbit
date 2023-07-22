import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { config, user } from "../../../Firebase";

import "./login.css";

function Login({ logIn }) {
  const navigate = useNavigate(); // Move useNavigate inside the Login component
  const [wrongCredentials, setWrongCredentials] = useState(false);
  const login = (event) => {
    event.preventDefault();

    var email = document.getElementById("container-auth-right-email-login").value;
    var password = document.getElementById("container-auth-right-password-login").value;
    signInWithEmailAndPassword(config.auth, email, password)
      .then((userCredential) => {
        user.authentication = userCredential;
        user.credentials = userCredential.user;
        localStorage.setItem('user', JSON.stringify(user)); // Store the entire user object as JSON
        navigate('/homepage');
        logIn();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setWrongCredentials(true);
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
              {wrongCredentials ? <p id="container-auth-right-lower-login" style={{ color: "#ffcccb" }}>*Incorrect Email or Password</p> : null}
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
                  onClick={() => { setWrongCredentials(false) }}
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
                  onClick={() => { setWrongCredentials(false) }}
                />
                {/* <a
                  id="container-auth-right-submit-login"
                  href="../../../OrbitHtml.html"
                >
                  Submit
                </a> */}
                <input id="container-auth-right-submit-login" type="submit" onClick={() => { setWrongCredentials(false) }} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
