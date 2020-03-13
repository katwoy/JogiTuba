import React from 'react';
import './VideoDetail.css';

const VideoDetail = ({video}) => {

  const url = `https://www.youtube.com/embed/${video}`;

  return (
    <div className="video-display">
      <iframe title="YouTube video" src={url} width="640" height="360" allowFullScreen frameBorder="0"></iframe>
    </div>
  )

}

export default VideoDetail;