import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


function LinkBtn() {
  return (
    <span className="cover" tabIndex="0">
      <Link to="/AboutUs"> <button type="button" className="btn btn-lg btn-block customBtn">About Us</button> </Link>
      <Link to="/ContactUs"> <button type="button" className="btn btn-lg btn-block two customBtn">Contact Us</button> </Link>
      <Link to="/Portfolio"> <button type="button" className="btn btn-lg btn-block three customBtn">Full Portfolio</button> </Link>
    </span>
  );
}

export default LinkBtn;
