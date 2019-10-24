import React from "react";
import "./slide.css";
import Image1 from "../../images/11a.jpg"
import Image2 from "../../images/12.jpg"
import Image3 from "../../images/Interior.jpg"
import { Slide } from 'react-slideshow-image';

const slideImages = [
    Image1,
    Image2,
    Image3
  ];
   
  const properties = {
    duration: 8000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
  };


function Slides() {
    return (
    <div className="slide-container">
    <Slide {...properties}>
      <div className="each-slide">
        <div>
          <span><img className="slides" src={slideImages[0]}></img></span>
        </div>
      </div>
      <div className="each-slide">
        <div>
          <span><img className="slides" src={slideImages[1]}></img></span>
        </div>
      </div>
      <div className="each-slide">
        <div>
          <span><img className="slides" src={slideImages[2]}></img></span>
        </div>
      </div>
    </Slide>
  </div>
  )
}


export default Slides;