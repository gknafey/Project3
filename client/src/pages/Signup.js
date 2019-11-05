import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import SignUpWrap from "../components/SignUp";



class SignUpInfo extends Component {
    state = {
      
    };

    componentDidMount() {
      window.scrollTo(0, 210);
  }
    
    
    render() {
      return (
        <Container fluid>
          <SignUpWrap />
        </Container>
      );
    }
  }
  
  export default SignUpInfo;