import React from 'react';
import VideoListItem from './VideoListItem';
import './VideoList.css';

const VideoList = ({videos, handleVideoSelect}) => {

  const videoItems = videos.map(video => {
    return (
      <VideoListItem key={video.contentDetails.videoId} video={video} handleVideoSelect={handleVideoSelect}/>       
    )
  })

  return (  
    <>
      <h3>Kliknij w miniaturę, aby wyświetlić film</h3>
      <ul className="video-list">
        {videoItems}
      </ul>
    </>
  )
}

export default VideoList;