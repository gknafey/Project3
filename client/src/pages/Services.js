import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import ServicesPageInfo from "../components/ServicesPageInfo"


class Services extends Component {
  state = {
    
  };
  
  render() {
    return (
      <Container fluid>
        <ServicesPageInfo />
      </Container>
    );
  }
}

export default Services;
