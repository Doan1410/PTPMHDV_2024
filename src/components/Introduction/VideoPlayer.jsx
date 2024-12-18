import React, { useRef, useEffect } from "react";
import "video.js/dist/video-js.css";
import videojs from "video.js";

const VideoPlayer = ({ videoSrc }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const player = videojs(videoRef.current, {
      controls: true,
      autoplay: true,
      preload: "auto",
    });

    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, []);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js" controls>
        <source src={videoSrc} type="video/mp4" />
        Trình duyệt của bạn không hỗ trợ thẻ video.
      </video>
    </div>
  );
};

export default VideoPlayer;
