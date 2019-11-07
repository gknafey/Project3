import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

function Footer() {
    return (

        <div className="container-max-width footer">
            <div className="row footBorder">
                <div className="col-5">
                   <p className="headLink">Affiliate Links <br></br></p> 

                   <a className="linkText" target="_blank" href="https://www.homeadvisor.com/rated.PlasterRestorationsLLC.43338900.html" to="#">Home Advisor</a>

                </div>
                <div className="col-3">

                </div>
                <div className="col-3">
                    <p className="headLink">Admin Links <br></br></p>
                    
                    <Link className="linkText" to="/login">Login</Link>

                </div>
            </div>
        </div>


    );
}

export default Footer;