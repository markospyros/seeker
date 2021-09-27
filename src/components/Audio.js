import React from "react";
import { Howl } from "howler";
import "../style/AudioStyle.css";

const Audio = (props) => {
  const wordSound = new Howl({
    src: props.sound,
  });

  const play = () => {
    wordSound.play();
  };
  return (
    <div onClick={play}>
      <i id="audioIcon">
        <i className="volume up icon"></i>
      </i>
    </div>
  );
};

export default Audio;
