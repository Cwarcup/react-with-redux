import React from 'react';

const VideoItem = ({ video }) => {
  return (
    <div>
      {video.snippet.title}
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.chanelTitle}
      />
    </div>
  );
};

export default VideoItem;
