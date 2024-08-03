import React from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ videoId, width, height }) => {
  const opts = {
    height: height,
    width: width,
    playerVars: {
      autoplay: 0,
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

export default VideoPlayer;
