import BackgroundSecurity from "./background/BackgroundSecurity";
import "./security.css";

function Security() {
  return (
    <>
      <div id="container-security">
        <BackgroundSecurity />
        <h5 id="header-text-security">WHY STAY AT ORBIT?</h5>
        <img
          id="ufo-security"
          className="floating"
          src="./index/security/blackhole.png"
        />
        <h1 id="main-text-security">SECURITY</h1>
        <h4 id="sub-text-security">YOUR DATA IS SAFE</h4>
      </div>
    </>
  );
}

export default Security;
