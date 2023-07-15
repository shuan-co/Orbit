import React from 'react';
import { signOut } from 'firebase/auth';
import { config, user } from '../../Firebase';
import { useAuth } from '../../Global';

function NavigationBar() {
  const { isLoggedIn, logIn, logOut } = useAuth();

  const logout = () => {
    signOut(config.auth)
      .then(() => {
        logOut();
        user.credentials = null;
        user.authentication = null;
        window.location.href = '/login';
      })
      .catch((error) => {
        // Handle any errors here
      });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" style={{ fontFamily: "AC-SUPERG" }} href="/">
            Orbit
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" style={{ fontFamily: "Tomorrow-Light" }} aria-current="page" href="/signup">
                Sign Up
              </a>
              <a className="nav-link" style={{ fontFamily: "Tomorrow-Light" }} href="/login">
                Login
              </a>
              <button onClick={logout} style={{ fontFamily: "Tomorrow-Light" }} className="nav-link">
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavigationBar;
