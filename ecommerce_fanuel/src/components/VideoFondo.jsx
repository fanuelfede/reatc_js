import React from 'react';
import VideoAgua from '../img/miVidein2_1.mp4';

const VideoFondo = () => {
  return <video autoPlay muted loop id='miVideo' src={VideoAgua} type="video/mp4"> </video>
};

export default VideoFondo;
