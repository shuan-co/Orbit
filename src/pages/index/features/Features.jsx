import "./features.css";

import BackgroundFeatures from "./background/BackgroundFeatures";

function Features() {
  return (
    <>
      <div id="container-features">
        <BackgroundFeatures />
        <h5 id="header-text-features">WHY JOIN ORBIT?</h5>
        <img id="moon-features" src="./index/features/moon.png" />
        <h1 id="main-text-features">FEATURES</h1>
        <h4 id="sub-text-features">MAIN FUNCTIONALITIES</h4>
      </div>
    </>
  );
}

export default Features;
