import React, { useEffect } from "react";
import "./scrollbar.css";

function Scrollbar() {
  useEffect(() => {
    const updateProgressBar = () => {
      const progress = document.getElementById("progressbar");
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progressHeight = (window.pageYOffset / totalHeight) * 100;
      progress.style.height = progressHeight + "%";
    };

    // Attach event listener when component mounts
    window.addEventListener("scroll", updateProgressBar);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", updateProgressBar);
    };
  }, []);

  return (
    <>
      <div id="progressbar"></div>
      <div id="scrollpath"></div>
    </>
  );
}

export default Scrollbar;
