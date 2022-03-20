import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video }) => {
  return (
    <div className="video-item item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.chanelTitle}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
        <div class="description">{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoItem;
