import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import LoginWrap from "../components/Login";



class LoginInfo extends Component {
    state = {
      
    };

    componentDidMount() {
      window.scrollTo(0, 210);
  }
    
    
    render() {
      return (
        <Container fluid>
          <LoginWrap />
        </Container>
      );
    }
  }
  
  export default LoginInfo;