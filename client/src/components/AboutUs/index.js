import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


function AboutUsInfo() {
  return (
    
        <div className="card text-white mb-3 aboutInfo">
        <div className="card-header">About Us</div>
            <div className="card-body">
            <h5 className="card-title">Plaster Restorations LLC</h5>
            <p className="card-text">Our Company is committed to offering the best quality work possible at the right price.</p>
            </div>

            <Link to="/AboutUs"> <a><button type="button" className="btn btn-lg aboutButton">Learn More</button></a> </Link>
        </div>

  );
}

export default AboutUsInfo;
