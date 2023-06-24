import React from "react";
import { useNavigate } from "react-router-dom";

import "./login.css";

const kafka = ["kafka@gmail.com", "kafka123"];
const himeko = ["himeko@gmail.com", "himeko12"];
const seele = ["seele@gmail.com", "seele123"];
const serval = ["serval@gmail.com", "serval12"];
const natasha = ["natasha@gmail.com", "natasha1"];

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/chatspace/${event.target.elements.gmail.value}`);
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
              <form
                id="container-auth-right-form-login"
                onSubmit={handleSubmit}
              >
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
