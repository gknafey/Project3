import React, { Component } from "react";
import { Container } from "../components/Grid";
import Logo from "../images/final.png"
import API from '../utils/API';
// import LoginWrap from "../components/Login";
import "../components/Login/style.css";
import { Redirect } from "react-router-dom";


class LoginInfo extends Component {
  state = {
    username: "",
    password: ""
  };

  componentDidMount() {
    window.scrollTo(0, 210);
  }

  compare = () => {
    
    API.logInUser({
      email: this.state.username,
      password: this.state.password

    }).then(res => {
     
      localStorage.setItem('user', res.data.email );

      this.setState({ redirect: true })
      
    })
  }


  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <Container fluid>
        <div className="content2">
          {this.state.redirect && <Redirect to="/" />}
          <img className="logo-location3" alt="Logo Here" src={Logo}></img>

          <div className="floatBot">
            <h1>Login</h1>

            <div>
              <label className="spaceMe">Username: </label>
              <input onChange={this.onChange} className="spaceMe" type="text" name="username" placeholder="username" />
              <label className="spaceMe" >Password</label>
              <input onChange={this.onChange} className="spaceMe" type="password" name="password" placeholder="password" />
              <input onClick={this.compare} className="btn btn-lg QuoteBtn" type="submit" value="Login" />
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default LoginInfo;