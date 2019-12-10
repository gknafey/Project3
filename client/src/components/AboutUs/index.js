import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


function AboutUsInfo() {
  return (
    
        <div className="card text-white mb-3 aboutInfo">
        <div className="card-header card-header-resize">Who We Are</div>
            <div className="card-body">
            <h5 className="card-title">Plaster Restorations LLC</h5>
            <p className="card-text">Our company is licensed and insured to provide superior quality
            plaster installation and repair solutions for both residential and 
            commercial construction, throughout NJ and the surrounding areas.</p>
            </div>

            <Link to="/AboutUs"> <button type="button" className="btn btn-lg customBtn aboutButton">Learn More</button> </Link>
        </div>

  );
}

export default AboutUsInfo;
