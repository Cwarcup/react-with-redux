import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

// map over and create images
// props passed from parent (app.js). Getting API response and passing it as props to ImageList.js
const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard image={image} key={image.id} />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
