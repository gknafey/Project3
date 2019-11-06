import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import { Redirect } from "react-router-dom";
// import ContactInfo from "../components/ContactInfo";

class JobManagement extends Component {
  state = {
    
  };

  componentDidMount() {
    let name = localStorage.getItem('user');
    API.verifyUser(name)
        .then(res => {
            // if(res.data !== name) {
            //     <Redirect to="/" />
            // }
            console.log(res.data, "hello15")

        })
           
        .catch(err => console.log(err));

  }
  
  render() {
    return (
      <Container fluid>
        <h1>Job Management Page</h1>
      </Container>
    );
  }
}

export default JobManagement;