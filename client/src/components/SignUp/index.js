import React from "react";
import Logo from "../../images/final.webp"
import { Redirect } from "react-router-dom";
// import "./style.css";

const SignUpWrap = () => {


    return (
        <div className="content2">
                {this.state.redirect && <Redirect to="/Login" />}
                <img className="logo-location3" src={Logo}></img>

                <div className="floatBot">
                <h1>Secret Sign Up</h1>

                <form action="/auth/signup" method="post">
                    <label className="spaceMe">Username: </label>
                    <input onChange={this.onChange} className="spaceMe" type="text" name="username" placeholder="username" />
                    <label className="spaceMe" >Password</label>
                    <input onChange={this.onChange} className="spaceMe" type="password" name="password" placeholder="password" />
                    <input className="btn btn-lg QuoteBtn" type="submit" value="Signup" />
                </form>  
                </div>                     
        </div>
    );
};


export default SignUpWrap;