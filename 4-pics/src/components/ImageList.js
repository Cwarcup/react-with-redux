import React from 'react';

// map over and create images
// props passed from parent (app.js). Getting API response and passing it as props to ImageList.js
const ImageList = (props) => {
  const images = props.images.map(({ description, id, urls }) => {
    return <img src={urls.regular} key={id} alt={description} />;
  });

  return <div>{images}</div>;
};

export default ImageList;
