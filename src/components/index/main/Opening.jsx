import "./opening.css";

function Opening() {
  return (
    <>
      <div id="container-opening">
        <video
          id="background-opening"
          src="./index/main/background.mp4"
          autoPlay
          loop
          muted
        ></video>
        <img
          id="astronaut-opening"
          className="floating"
          src="./index/main/astro.png"
          alt="something"
        />
        <h1 id="opening-text-opening">ORBIT</h1>
        <h6 id="lower-text-opening">TRAVEL THE UNIVERSE</h6>
      </div>
    </>
  );
}

export default Opening;
