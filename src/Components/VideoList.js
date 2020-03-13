import React, { useState } from 'react';
import VideoListItem from './VideoListItem';
import './VideoList.css';
import VideoDetail from './VideoDetail';

const VideoList = ({videos}) => {

  const [selectedVideo, setSelectedVideo] = useState("");

  const handleVideoSelect = (video) => {
    setSelectedVideo(video)
  }

  const videoItems = videos.map(video => {
    return (
      <>
        <VideoListItem key={video.contentDetails.videoId} video={video} handleVideoSelect={handleVideoSelect}/>   
      </>    
    )
  })

  return (  
    <>
      {selectedVideo !== "" && <VideoDetail video={selectedVideo}/>}
      <h3 className="video-list-title">{selectedVideo === "" ? "Kliknij w miniaturę, aby wyświetlić film" : "Kliknij w miniaturę, aby zmienić wyświetlany film"}</h3>
      <ul className="video-list">
        {videoItems}
      </ul>
    </>
  )
}

export default VideoList;