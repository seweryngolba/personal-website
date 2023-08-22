import React from "react";
import { Avatar } from "@readyplayerme/visage";

const modelSrc = "https://models.readyplayer.me/64dcddc1cfdd0f000df9468c.glb";
const animationSrc = "/waving-animation.glb";

const MyAvatar = () => {
  return (
    <Avatar
      animationSrc={animationSrc}
      cameraInitialDistance={2.5}
      cameraTarget={1.55}
      modelSrc={modelSrc}
      onLoadedAnimation={{
        loop: 1,
        src: "/Waving.fbx",
      }}
    />
  );
};

export default MyAvatar;
