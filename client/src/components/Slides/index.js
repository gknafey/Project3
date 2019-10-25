import React from "react";
import "./slide.css";
import Image1 from "../../images/11test.jpg"
import Image2 from "../../images/12.jpg"
import Image3 from "../../images/Interior.jpg"
import Image4 from "../../images/10.jpg"
import { Slide } from 'react-slideshow-image';

const slideImages = [
    Image1,
    Image2,
    Image3,
    Image4
  ];
   
  const properties = {
    duration: 8000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: true,
    
  };


function Slides() {
    return (
    <div className="slide-container">
    <Slide {...properties}>
      <div className="each-slide">
        <div>
          <span><img className=" firstslide" src={slideImages[0]} alt="Porfolio Image Not Found"></img></span>
        </div>
      </div>
      <div className="each-slide">
        <div>
          <span><img className="slide" src={slideImages[1]} alt="Porfolio Image Not Found"></img>
          <img className="slide" src={slideImages[3]} alt="Porfolio Image Not Found"></img>
          </span>
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