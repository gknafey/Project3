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

  empty = (data) => {
    if (typeof (data) == 'number' || typeof (data) == 'boolean') {
      return false;
    }
    if (typeof (data) == 'undefined' || data === null) {
      return true;
    }
    if (typeof (data.length) != 'undefined') {
      return data.length === 0;
    }
    var count = 0;
    for (var i in data) {
      if (data.hasOwnProperty(i)) {
        count++;
      }
    }
    return count === 0;
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    let name = localStorage.getItem('user');

    API.verifyUser(name)
      .then(res => {

        if (this.empty(res.data) === true) {
          document.getElementById("hidden").style.display = "none";
        }
        else if (res.data[0].email === name) {

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
        <Jumbotron >
          <span>
            <AboutUsInfo  />
            <AboutImage  />
            <RequestAQuote  />
          </span>

        </Jumbotron>

      </div>
    );
  }
}

export default Homepage;
