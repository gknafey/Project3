import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


function RequestAQuote() {
  return (
    
        
        <div className="card text-white mb-3 requestA">
        <div className="card-header">Contact Us Today</div>
            <div className="card-body">
            <h5 className="card-title">Make an appointment</h5>
            <p className="card-text">Due to the nature of plastering it is often difficult to give a correct quote over the phone without one of our employees visiting the site personally to inspect the area where work must be done. <br></br><br></br><br></br> Click below for our contact information </p>
            </div>

            <Link to="/ContactUs"><button type="button" className="btn btn-lg customBtn FormButton">Contact Us</button></Link>
        </div>

    
  );
}

export default RequestAQuote;
