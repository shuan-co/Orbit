import BackgroundTechnologies from "./background/BackgroundTechnologies";
import "./technologies.css";

function Technologies() {
  return (
    <>
      <BackgroundTechnologies />
      <div id="container-technologies">
        <h5 id="header-text-technologies">HOW DOES ORBIT WORK?</h5>
        <img
          id="satellite-technologies"
          src="./index/technologies/satellite.png"
          className="floating"
        />
        <h1 id="main-text-technologies">TECHNOLOGIES</h1>
      </div>
    </>
  );
}

export default Technologies;
