import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';


const ImageSlide = ({ url }) => {
  const [image, setImage] = useState(null)

  const onImageLoaded = (img) => {
    setImage(img.src)
  }

  useEffect(() => {
    let img = new Image();
    img.onload = function () {onImageLoaded(img)}
    img.src = url
  })

  const styles = {
    backgroundImage: `url(${image && image})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center'
  };

  return (
    <div className="image-slide" style={styles}></div>
  )
}

export default ImageSlide;