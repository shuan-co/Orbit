// Components
import Opening from "./main/Opening.jsx";
import AboutUs from "./aboutus/AboutUs.jsx";
import AboutUs2 from "./aboutus2/AboutUs2.jsx";
import AboutUs3 from "./aboutus3/AboutUs3.jsx";
import Features from "./features/Features.jsx";
import Features2 from "./features2/Features2.jsx";
import Security from "./security/Security.jsx";
import Security2 from "./security2/Security2.jsx";
import JoinUs from "./joinus/JoinUs.jsx";
import Slider from "./slider/Slider.jsx";

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
        <Parallax pages={10} ref={parallaxContainerRef}>
          <ParallaxLayer>
            <Opening />
          </ParallaxLayer>
          <ParallaxLayer offset={1}>
            <AboutUs />
          </ParallaxLayer>
          <ParallaxLayer offset={2}>
            <AboutUs2 />
          </ParallaxLayer>
          <ParallaxLayer offset={3}>
            <AboutUs3 />
          </ParallaxLayer>
          <ParallaxLayer offset={4}>
            <Features />
          </ParallaxLayer>
          <ParallaxLayer offset={5}>
            <Features2 />
          </ParallaxLayer>
          <ParallaxLayer offset={6}>
            <Security />
          </ParallaxLayer>
          <ParallaxLayer offset={7}>
            <Security2 />
          </ParallaxLayer>
          <ParallaxLayer offset={8}>
            <JoinUs />
          </ParallaxLayer>
          <ParallaxLayer offset={9}>
            <Slider />
          </ParallaxLayer>

          <div id="progressbar-scrollbar"></div>
          <div id="scrollpath-scrollbar"></div>
        </Parallax>
      </div>
    </>
  );
}

export default Index;
