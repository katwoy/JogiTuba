import React from 'react';
import './VideoListItem.css';

const VideoListItem = ({video, handleVideoSelect}) => {


  return (
    <>
      <li onClick={() => handleVideoSelect(video.contentDetails.videoId)} className="video-item">
        <div className="video-thumbnail-container">
          <img src={video.snippet.thumbnails.medium.url}  alt="YouTube movie thumbnail" className="video-thumbnail"/>
          <button className="video-play-button"></button>
        </div>
        <h4 className="video-item-title">{video.snippet.title}</h4>
      </li>
    </>
  )
}

export default VideoListItem;