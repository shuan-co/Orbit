import "./login.css";

import React from "react";

function Login() {
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
              <p id="container-auth-right-header-login">Welcome Aboard!</p>
              <p id="container-auth-right-lower-login">
                What are your plans today, traveler?
              </p>
              <form id="container-auth-right-form-login" action="">
                <label
                  id="container-auth-right-label-login"
                  htmlFor="container-auth-right-email-login"
                >
                  Email
                </label>
                <input
                  type="email"
                  name=""
                  className="container-auth-right-input-login"
                  id="container-auth-right-email-login"
                  placeholder="sample@gmail.com"
                />
                <label
                  id="container-auth-right-label-login"
                  htmlFor="container-auth-right-email-login"
                >
                  Password
                </label>
                <input
                  type="password"
                  name=""
                  placeholder="Minimum 8 characters"
                  className="container-auth-right-input-login"
                  id="container-auth-right-email-login"
                />
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
