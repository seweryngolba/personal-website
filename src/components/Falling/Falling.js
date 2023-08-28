import React from "react";
import { Avatar } from "@readyplayerme/visage";
import "./Falling.css";

const fallSrc = "https://models.readyplayer.me/64ec8faa4a8548d9bc0f525e.glb";
const fallAnimation = "/Falling.fbx";

const Falling = () => {
  return (
    <div className="fallContainer">
      <div className="falling">
        <Avatar
          animationSrc={fallAnimation}
          cameraInitialDistance={2.2}
          cameraTarget={0.5}
          modelSrc={fallSrc}
          onLoadedAnimation={{
            loop: 1,
            src: "/Falling.fbx",
          }}
        />
      </div>
    </div>
  );
};

export default Falling;
