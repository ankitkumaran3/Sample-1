import React, { useState } from "react";

function VideoPlayer() {
  const [videoSource, setVideoSource] = useState(
    "https://d1cdttoubezer4.cloudfront.net/Trail1.mp4"
  );

  const changeVideo = (src) => {
    setVideoSource(src);
  };

  return (
    <div className="video-container">
      <video controls width="100px" height="100px">
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-options">
        <button onClick={() => changeVideo("https://example.com/video1.mp4")}>
          Video 1
        </button>
        <button onClick={() => changeVideo("https://example.com/video2.mp4")}>
          Video 2
        </button>
        {/* Add more buttons for additional videos */}
      </div>
    </div>
  );
}

export default VideoPlayer;
