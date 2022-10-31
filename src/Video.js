import React from "react";
import bg from "./assets/bg.mp4";
import "./styles/Video.css";
const Video = () => {
  return (
    <video className="background-video" src={bg} autoPlay loop muted></video>
  );
};

export default Video;
