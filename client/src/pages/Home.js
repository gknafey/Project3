import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Slides from "../components/Slides";
import LinkBtn from "../components/LinkBtn";
import AboutUsInfo from "../components/AboutUs";
import AboutImage from "../components/AboutImage";
import RequestAQuote from "../components/RequestAQuote";
import API from "../utils/API";
import { Redirect } from "react-router-dom";




class Homepage extends Component {
  state = {
    
  };

  

  componentDidMount() {
    let name = localStorage.getItem('user');
    console.log(name);
    API.verifyUser(name)
        .then(res => {
            console.log(res.data)
            if(res.data[0].email === name) {
                console.log(true);
              document.getElementById("hidden").style.display = "block";
              console.log(res.data.email, "hello15")
            }

        })
           
        .catch(err => console.log(err));

  }

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
