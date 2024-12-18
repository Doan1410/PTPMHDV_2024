import React from "react";
import "./Intro.css";
import VideoPlayer from "./VideoPlayer";
import videoSrc from "../../assets/videointro.mp4";  // Đường dẫn cập nhật

const Intro = () => {
  return (
    <div className="intro-container">
      <div className="video-wrapper">
        <VideoPlayer videoSrc={videoSrc} />
        <div className="overlay-text">
          <p>Đây là video của tôi đã đưa link</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
