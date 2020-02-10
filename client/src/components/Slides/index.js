import React from "react";
import "./slide.css";
import Image1 from "../../images/11test.jpg"
import Church from "../../images/Church_On_The_Green_1.JPG"
import Scaffold from "../../images/COG_on_scaffold.jpg"
import Church2 from "../../images/Church_On_The_Green_2.JPG"
import Trenton from "../../images/Trenton_Historic_Masonic_Temple.JPG"
import NC from "../../images/NC_Grainger_Auditorium.JPG"
import { Slide } from 'react-slideshow-image';

const slideImages = [
  Image1,
  Church,
  Scaffold,
  Church2,
  Trenton,
  NC
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
            <span>
              <img className=" firstslide" src={slideImages[0]} alt="Porfolio Not Found"></img>
              <img className="fourthslide" src={slideImages[4]} alt="Porfolio Not Found"></img>
            </span>
          </div>
        </div>
        <div className="each-slide">
          <div>
            <span><img className="slides" src={slideImages[5]} alt="Porfolio Not Found"></img></span>
          </div>
        </div>
        <div className="each-slide">
          <div>
            <span>
              <img className="slide" src={slideImages[1]} alt="Porfolio Not Found"></img>
              <img className="slide" src={slideImages[3]} alt="Porfolio Not Found"></img>
            </span>
          </div>
        </div>
        <div className="each-slide">
          <div>
            <span><img className="slides" src={slideImages[2]} alt="Porfolio Not Found"></img></span>
          </div>
        </div>
      </Slide>
    </div>
  )
}


export default Slides;