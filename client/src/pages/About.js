import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import AboutPageInfo from "../components/AboutPageInfo"
import AboutPageImages from "../components/AboutPageImages";

class AboutUs extends Component {
  state = {
    
  };
  
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
