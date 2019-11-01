import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Slides from "../components/Slides";
import LinkBtn from "../components/LinkBtn";
import AboutUsInfo from "../components/AboutUs";
import AboutImage from "../components/AboutImage";
import RequestAQuote from "../components/RequestAQuote";




class Homepage extends Component {
  state = {
    
  };

  render() {

    return (
      <div>
        <Slides />
        <LinkBtn />
        <Jumbotron>
          <span>
            <AboutUsInfo /> 
            <AboutImage />
            <RequestAQuote />
          </span>

        </Jumbotron>
        
      </div>
    );
  }
}

export default Homepage;
