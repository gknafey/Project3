import React, { Component } from "react";
import { Container } from "../components/Grid";
import FormWrap from "../components/FormWrap";



class FormInfo extends Component {
    state = {
      
    };

    componentDidMount() {
      window.scrollTo(0, 210);
  }
    
    
    render() {
      return (
        <Container fluid>
          <FormWrap />
        </Container>
      );
    }
  }
  
  export default FormInfo;