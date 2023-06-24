import BackgroundJoinUs from "./background/BackgroundJoinUs";
import Slider from "../slider/Slider";
import "./joinus.css";

function JoinUs() {
  return (
    <>
      <div id="container-joinus">
        <BackgroundJoinUs />
        <div id="continer-left-joinus">
          <h1 id="main-text-joinus">EXPLORE,</h1>
          <h1 id="main-text-joinus">DISCOVER, SHARE</h1>
          <p id="lower-text-joinus">
            Join us on our cosmic adventure and become a celestial member of
            Orbit, where the stars align and the pixels sparkle! Step into our
            orbit and let your online presence soar to galaxies unknown.
            Together, we'll defy gravity, defy expectations, and defy the
            ordinary. Buckle up, because this journey promises an eccentric
            blend of wit, wonder, and a hint of quirkiness that's simply out of
            this world! Embrace the oddity, embrace the Orbit, and let's launch
            into a universe of digital delight.
          </p>
          <br />
          <a href="/signup" id="button-joinus">
            JOIN ORBIT
          </a>
        </div>
        <div id="container-right-joinus">
          <img id="radial-joinus" src="./index/joinus/radial.png" alt="" />
          <img id="side-joinus" src="./index/joinus/side.png" alt="" />
          <img id="lines-joinus" src="./index/joinus/lines.png" alt="" />
          <img
            id="astronaut-joinus"
            className="floating"
            src="./index/joinus/astronaut.png"
          />
        </div>
      </div>
    </>
  );
}

export default JoinUs;
