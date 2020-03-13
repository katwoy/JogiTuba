import React from 'react';
import './VideoListItem.css';

const VideoListItem = ({video, handleVideoSelect}) => {


  return (
    <>
      <li onClick={() => handleVideoSelect(video.contentDetails.videoId)} className="video-item">
        <button className="video-container">
          <img src={video.snippet.thumbnails.medium.url}  alt="YouTube movie thumbnail" className="video-thumbnail"/>
          <h4 className="video-item-title">{video.snippet.title}</h4>
        </button> 
      </li>
    </>
  )
}

export default VideoListItem;