// Components
import Opening from "./main/Opening.jsx";
import AboutUs from "./aboutus/AboutUs.jsx";
import AboutUs2 from "./aboutus2/AboutUs2.jsx";
import AboutUs3 from "./aboutus3/AboutUs3.jsx";
import Features from "./features/Features.jsx";

// Scrollbar
import { useEffect, useRef } from "react";
import "./scrollbar.css";

// Parallax Effect
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// CSS
import "./index.css";
import Features2 from "./features2/Features2.jsx";

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
        <Parallax pages={6} ref={parallaxContainerRef}>
          <ParallaxLayer speed={1}>
            <Opening />
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.5}>
            <AboutUs />
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.5}>
            <AboutUs2 />
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={0.5}>
            <AboutUs3 />
          </ParallaxLayer>
          <ParallaxLayer offset={4} speed={0.5}>
            <Features />
          </ParallaxLayer>
          <ParallaxLayer offset={5} speed={0.5}>
            <Features2 />
          </ParallaxLayer>

          <div id="progressbar-scrollbar"></div>
          <div id="scrollpath-scrollbar"></div>
        </Parallax>
      </div>
    </>
  );
}

export default Index;
