import React, { Component } from "react";
import API from '../utils/API';
import Logo from "../images/final.webp"
import { Container } from "../components/Grid";
import { Redirect } from "react-router-dom";
// import SignUpWrap from "../components/SignUp";



class SignUpInfo extends Component {
    state = {
      username: "",
      password: ""
    };

    componentDidMount() {
      window.scrollTo(0, 210);
  }

  register = () => {
    API.newUser({
      email: this.state.username,
      password: this.state.password
    }).then(newUser => {
      this.setState({ redirect: true})
      console.log(newUser);
    })
  }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value})
  }
    
    
    render() {
      return (
        <Container fluid>
          <div className="content2">
                {this.state.redirect && <Redirect to="/Login" />}
                <img className="logo-location3" src={Logo} alt="Logo Here"></img>

                <div className="floatBot">
                <h1>Secret Sign Up</h1>

                <div>
                    <label className="spaceMe">Email: </label>
                    <input onChange={this.onChange} className="spaceMe" type="text" name="username" placeholder="username" />
                    <label className="spaceMe" >Password</label>
                    <input onChange={this.onChange} className="spaceMe" type="password" name="password" placeholder="password" />
                    <button onClick={this.register} className="btn btn-lg QuoteBtn">Sign Up</button>
                </div> 
                </div>                     
        </div>
        </Container>
      );
    }
  }
  
  export default SignUpInfo;