import React from "react";
import { Avatar } from "@readyplayerme/visage";
import "./Landing.css";

const landSrc = "https://models.readyplayer.me/64ec98fd1db75f90dcf75d72.glb";
const landAnimation = "/Landing.fbx";

const Landing = () => {
  return (
    <Avatar
      animationSrc={landAnimation}
      cameraInitialDistance={2.2}
      cameraTarget={0.5}
      modelSrc={landSrc}
      onLoadedAnimation={{
        loop: 1,
        src: "/Landing.fbx",
      }}
    />
  );
};

export default Landing;
