// Components
import Opening from "./main/Opening.jsx";
import AboutUs from "./aboutus/Aboutus.jsx";

// Scrollbar
import { useEffect, useRef } from "react";
import "./scrollbar.css";

// Parallax Effect
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// CSS
import "./index.css";

function Index() {
  const parallaxContainerRef = useRef(null);

  useEffect(() => {
    const updateProgressBar = () => {
      const progress = document.getElementById("progressbar-scrollbar");
      const container = parallaxContainerRef.current.container.current;
      const totalHeight = container.scrollHeight - container.clientHeight;
      const progressHeight = (container.scrollTop / totalHeight) * 100;
      progress.style.height = progressHeight + "%";
    };

    const container = parallaxContainerRef.current.container.current;
    // Attach event listener when component mounts
    container.addEventListener("scroll", updateProgressBar);

    return () => {
      // Clean up the event listener when component unmounts
      container.removeEventListener("scroll", updateProgressBar);
    };
  }, []);

  return (
    <>
      <div className="stage">
        <Parallax pages={2} ref={parallaxContainerRef}>
          <ParallaxLayer speed={1}>
            <Opening />
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.5}>
            <AboutUs />
          </ParallaxLayer>
          <div id="progressbar-scrollbar"></div>
          <div id="scrollpath-scrollbar"></div>
        </Parallax>
      </div>
    </>
  );
}

export default Index;
