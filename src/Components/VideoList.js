import React, { useState } from 'react';
import VideoListItem from './VideoListItem';
import './VideoList.css';
import VideoDetail from './VideoDetail';

const VideoList = ({videos}) => {

  const [selectedVideo, setSelectedVideo] = useState("");
  const [videoVisibility, setVideoVisibility] = useState(false);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video)
    setVideoVisibility(true)
  }

  const handleClose = (visibility) => {
    setVideoVisibility(visibility)
  }

  const videoItems = videos.map(video => {
    return (
      <>
        <VideoListItem key={video.contentDetails.videoId} video={video} handleVideoSelect={handleVideoSelect} />   
      </>    
    )
  })

  return (  
    <>
      {videoVisibility && <VideoDetail video={selectedVideo} handleClose={handleClose}/>}
      <h3 className="video-list-title">Kliknij w miniaturę, aby wyświetlić film</h3>
      <ul className="video-list">
        {videoItems}
      </ul>
    </>
  )
}

export default VideoList;