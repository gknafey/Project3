import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


function LinkBtn() {
  return (
    <span className="cover" tabIndex="0">
      <Link to="/AboutUs"> <a><button type="button" className="btn btn-lg btn-block">About Us</button></a> </Link>
      <Link to="">       <a><button type="button" className="btn btn-lg btn-block two">Request a Quote</button></a> </Link>
      <Link to="/Portfolio"> <a><button type="button" className="btn btn-lg btn-block three">Full Portfolio</button></a> </Link>
    </span>
  );
}

export default LinkBtn;
