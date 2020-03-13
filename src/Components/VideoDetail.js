import React from 'react';
import './VideoDetail.css';

const VideoDetail = ({video, handleClose}) => {

  const url = `https://www.youtube.com/embed/${video}`;

  return (
    <div className="video-display">
      <div className="video-display-shade"></div>
      <div className="video-display-container">
        <iframe title="YouTube video" src={url} width="640" height="360" allowFullScreen frameBorder="0"></iframe>
        <button className="video-display-close" onClick={() => handleClose(false)}>X</button>
      </div>
    </div>
  )

}

export default VideoDetail;