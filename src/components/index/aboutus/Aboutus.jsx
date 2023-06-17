import Background from "./background/Background.jsx";

import "./aboutus.css";
function AboutUs() {
  return (
    <>
      <div id="container-aboutus">
        <Background />
        <img
          id="planet-aboutus"
          className="floating"
          src="./index/aboutus/planet.png"
        />
        <h1 id="lower-aboutus">
          What is <span id="bold-aboutus">ORBIT</span>?
        </h1>
      </div>
    </>
  );
}

export default AboutUs;
