'use client'

import React from "react";
import { VideoPlayer, VideoPlayerProps } from "@graphland/react-video-player";

const App: React.FC = () => {
  const videoSources: { src: string; type: string }[] = [
    {
      src: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      type: "video/mp4",
    },
    // Add more video sources as needed
  ];

  const videoProps: VideoPlayerProps = {
    theme: "city", // 'city', 'fantasy', 'forest', 'sea'
    height: 720,
    width: 1280,
    autoPlay: false,
    loop: false,
    sources: videoSources,
    controlBar: {
      skipButtons: {
        forward: 10,
        backward: 10,
      },
    },
    playbackRates: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3, 3.25, 3.5, 3.75, 4],
    disablePictureInPicture: false,
    onReady: () => {
      console.log("Video player is ready!");
    },
  };

  return <VideoPlayer {...videoProps} />;
};

export default App;