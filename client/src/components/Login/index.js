import React from "react";
import Logo from "../../images/final.webp"
import "./style.css";

const LoginWrap = () => {


    return (
        <div className="content2">
            
                <img className="logo-location3" src={Logo}></img>

                <div className="floatBot">
                <h1>Login</h1>

                <form action="/auth/login" method="post">
                    <label className="spaceMe">Username: </label>
                    <input className="spaceMe" type="text" name="username" placeholder="username" />
                    <label className="spaceMe" >Password</label>
                    <input className="spaceMe" type="password" name="password" placeholder="password" />
                    <input className="btn btn-lg QuoteBtn" type="submit" value="Login" />
                </form>  
                </div>                     
        </div>
    );
};


export default LoginWrap;