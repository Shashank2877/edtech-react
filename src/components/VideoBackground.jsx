import React, { useRef, useEffect } from 'react';

const VideoBackground = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Ensure video is muted and set other properties for Safari compatibility
      video.muted = true;
      video.playsInline = true;
      video.defaultMuted = true;
      
      // Try to play the video, handle any errors gracefully
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log('Video autoplay failed:', error);
          // Autoplay was prevented, video will play when user interacts
        });
      }
    }
  }, []);

  return (
    <div className="video-background">
      <video 
        ref={videoRef}
        autoPlay 
        loop 
        muted 
        playsInline
        defaultMuted
        preload="auto"
        className="video-element"
        style={{ objectFit: 'cover' }}
      >
        <source src="/5453622-uhd_3840_2160_24fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay"></div>
    </div>
  );
};

export default VideoBackground;