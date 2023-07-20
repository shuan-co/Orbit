import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import config from "./config.jsx";

const BackgroundChatSpace = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
  }, []);

  return (
    <Particles
      id="tsparticles12"
      init={particlesInit}
      loaded={particlesLoaded}
      options={config}
    />
  );
};

export default BackgroundChatSpace;
