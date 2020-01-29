import React from 'react';
import './ImageCarousel.css';


const Arrow = ({ direction, clickFunction, glyph }) => {

  return (
    <div
      className={`slide-arrow ${direction}`}
      onClick={ clickFunction }>
      { glyph }
    </div>
  )
}

export default Arrow;