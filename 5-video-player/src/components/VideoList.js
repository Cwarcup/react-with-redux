// will render a list
// will take the array created by the Search
// VideoList will render the componenets that render the individual video

import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  console.log({ videos });

  // will render a list of the video data
  const renderedList = videos.map((video) => {
    return <VideoItem video={video} />;
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
