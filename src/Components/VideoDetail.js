import React from 'react';

const VideoDetail = ({video}) => {

  // const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${video}`;

  return (
    <iframe title="YouTube video" src={url}></iframe>
  )

}

export default VideoDetail;