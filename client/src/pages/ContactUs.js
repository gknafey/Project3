import React, { Component } from "react";
import { Container } from "../components/Grid";
import ContactInfo from "../components/ContactInfo";

class ContactUs extends Component {
  state = {
    
  };
  
  render() {
    return (
      <Container fluid>
        <ContactInfo />
      </Container>
    );
  }
}

export default ContactUs;
