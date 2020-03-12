import React from 'react';
import VideoListItem from './VideoListItem';
import './VideoList.css';

const VideoList = ({videos, handleVideoSelect}) => {

  const videoItems = videos.map(video => {
    return (
      <VideoListItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect}/>       
    )
  })

  return (  
    <ul className="video-list">
      {videoItems}
    </ul>
  )
}

export default VideoList;