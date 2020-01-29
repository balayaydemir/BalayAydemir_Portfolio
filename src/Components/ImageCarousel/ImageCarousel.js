import React, { Component } from 'react';
import ImageSlide from './ImageSlide';
import Arrow from './Arrow';
import StyleIcon from '../StyleIcon/StyleIcon';

export default class ImageCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  previousSlide() {
    const lastIndex = this.props.imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide() {
    const lastIndex = this.props.imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    })
  }

  render() {
    console.log(this.props.imgUrls)
    return (
      <div className="carousel">
        <Arrow 
          direction="left"
          clickFunction={ this.previousSlide }
          glyph={StyleIcon({
            style: 'left'
          })}
          />

        <ImageSlide url={ this.props.imgUrls[this.state.currentImageIndex] } />

        <Arrow 
          direction="right"
          clickFunction={ this.nextSlide }
          glyph={StyleIcon({
            style: 'right'
          })}
          />
      </div>
    )
  }
}