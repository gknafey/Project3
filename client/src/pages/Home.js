import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Slides from "../components/Slides";
import LinkBtn from "../components/LinkBtn";
import AboutUsInfo from "../components/AboutUs";
import AboutImage from "../components/AboutImage";
import RequestAQuote from "../components/RequestAQuote";
import API from "../utils/API";

class Homepage extends Component {
  state = {
    
  };

  

  componentDidMount() {
    let name = localStorage.getItem('user');
    
    API.verifyUser(name)
        .then(res => {
            
            if(res.data[0].email === name) {
                
              document.getElementById("hidden").style.display = "block";
              
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
