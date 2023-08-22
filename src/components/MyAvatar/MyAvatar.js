import React from "react";
import { Avatar } from "@readyplayerme/visage";

const modelSrc = "https://models.readyplayer.me/64dcddc1cfdd0f000df9468c.glb";
const animationSrc = "/Waving.fbx";

const MyAvatar = () => {
  return (
    <div className="myAvatar">
      <Avatar
        animationSrc={animationSrc}
        cameraInitialDistance={2.2}
        cameraTarget={0.5}
        modelSrc={modelSrc}
        onLoadedAnimation={{
          loop: 1,
          src: "/Waving.fbx",
        }}
      />
    </div>
  );
};

export default MyAvatar;
