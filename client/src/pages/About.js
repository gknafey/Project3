import React, { Component } from "react";
import { Container } from "../components/Grid";
import AboutPageInfo from "../components/AboutPageInfo"
import AboutPageImages from "../components/AboutPageImages";

class AboutUs extends Component {
  state = {
    
  };

  componentDidMount() {
    window.scrollTo(0, 0);
}
  
  render() {
    return (
      <Container fluid>
        <AboutPageInfo />
        <AboutPageImages />
      </Container>
    );
  }
}

export default AboutUs;
