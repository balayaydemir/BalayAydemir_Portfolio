import React from 'react';
import './ImageCarousel.css';

const ImageSlide = ({ url }) => {
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center'
  };

  return (
    <div className="image-slide" style={styles}></div>
  )
}

export default ImageSlide;