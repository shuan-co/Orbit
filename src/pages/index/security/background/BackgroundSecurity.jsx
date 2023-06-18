import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import config from "./config.jsx";

const BackgroundSecurity = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles3"
      init={particlesInit}
      loaded={particlesLoaded}
      options={config}
    />
  );
};

export default BackgroundSecurity;
