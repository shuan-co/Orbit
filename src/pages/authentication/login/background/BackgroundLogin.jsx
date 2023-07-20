

import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import config from "./config.jsx";

const BackgroundLogin = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
  }, []);

  return (
    <Particles
      id="tsparticles5"
      init={particlesInit}
      loaded={particlesLoaded}
      options={config}
    />
  );
};

export default BackgroundLogin;
