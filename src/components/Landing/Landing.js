import React, { useState, useEffect } from "react";
import { Avatar } from "@readyplayerme/visage";
import "./Landing.css";

const landSrc = "https://models.readyplayer.me/64ec98fd1db75f90dcf75d72.glb";
const landAnimation = "/Landing.fbx";
const standAnimation = "/Stand.fbx";

const Landing = () => {
  const [currentAnimation, setCurrentAnimation] = useState(landAnimation);

  useEffect(() => {
    const handleScroll = () => {
      const isAtEndOfPage =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;

      if (isAtEndOfPage) {
        // Po dojechaniu do końca strony, ustaw animację na Standing po 2 sekundach
        setTimeout(() => {
          setCurrentAnimation(standAnimation);
        }, 700);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="avLanding">
      <Avatar
        animationSrc={currentAnimation}
        cameraInitialDistance={2.2}
        cameraTarget={0.5}
        modelSrc={landSrc}
        onLoadedAnimation={{
          loop: 1,
          src: currentAnimation,
        }}
      />
    </div>
  );
};

export default Landing;
