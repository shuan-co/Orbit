import "./aboutus.css";
import React, { useEffect, useState } from 'react';

function AboutUs(){
    const StarScene = () => {
        const [stars, setStars] = useState([]);
      
        useEffect(() => {
          const createDiv = () => {
            const newStars = [];
            for (let i = 0; i < 210; i++) {
              newStars.push(<div key={i} className="star"></div>);
            }
            setStars(newStars);
          };
          createDiv();
        }, []);
      
        return (
          <div className="scene">
            {stars.map((star, index) => (
              <div
                key={index}
                style={{
                  '--x': `${Math.random() * 200}vmax`,
                  '--y': `${Math.random() * 100}vh`,
                  '--z': `${Math.random() * 200 - 100}vmin`,
                  '--rx': `${Math.random() * 360}deg`,
                  animationDelay: `${Math.random() * 1.5}s`,
                }}
              ></div>
            ))}
          </div>
        );
      };
    return (<>
        <div className="scene">

        </div>
    </>);
}

export default AboutUs;