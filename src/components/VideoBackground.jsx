import React from 'react';

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted className="video-element">
        <source src="/5453622-uhd_3840_2160_24fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay"></div>
    </div>
  );
};

export default VideoBackground;