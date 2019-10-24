import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import Image1 from "../images/11a.jpg"
import Image2 from "../images/12.jpg"
import Image3 from "../images/Interior.jpg"
import { Slide } from 'react-slideshow-image';
import Slides from "../components/Slides";




class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };



  render() {

    return (
      <div>
        <Slides>
          <div>
            <h1>Plasterers</h1>
          </div>
        </Slides>
        <Jumbotron></Jumbotron>
      </div>
    );
  }
}

export default Books;
