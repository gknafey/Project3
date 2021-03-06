import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


function RequestAQuote() {
  return (
    
        
        <div className="card text-white mb-3 requestA">
        <div className="card-header">Request an Estimate Today</div>
            <div className="card-body">
            <h5 className="card-title">Why make a request?</h5>
            <p className="card-text">Due to the nature of plastering it is often difficult to give a correct quote over the phone without one of our employees visiting the site personally to inspect the area where work must be done. <br></br><br></br><br></br> Click on the button to make a request </p>
            </div>

            <Link to="/RequestForm"><button type="button" className="btn btn-lg customBtn FormButton">Form</button></Link>
        </div>

    
  );
}

export default RequestAQuote;
