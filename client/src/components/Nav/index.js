import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from "../../images/final.png"

function Nav() {
  return (
    <nav className="navbar">

      
        <Link to="/" className="navbar-brand"> <img className="logo" alt="Logo Here" src={Logo}></img> </Link>
      
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link to="/" className="nav-item test">Home </Link>
        </li>
        <li className="nav-item">
          <p className="nav-item" style={{ "color": "#e5cdaa" }}>&nbsp;|&nbsp;</p>
        </li>
        <li className="nav-item">
          <Link to="/AboutUs" className="nav-item test">About Us </Link>
        </li>
        <li className="nav-item">
          <p className="nav-item" style={{ "color": "#e5cdaa" }} >&nbsp;|&nbsp;</p>
        </li>
        <li className="nav-item">
          <Link to="/Portfolio" className="nav-item test">Portfolio </Link>
        </li>
        <li className="nav-item">
          <p className="nav-item" style={{ "color": "#e5cdaa" }}>&nbsp;|&nbsp;</p>
        </li>
        <li className="nav-item">
          <Link to="/Services" className="nav-item test">Services </Link>
        </li>
        <li className="nav-item">
          <p className="nav-item" style={{ "color": "#e5cdaa" }}>&nbsp;|&nbsp;</p>
        </li>
        <li className="nav-item">
          <Link to="/ContactUs" className="nav-item test">Contact Us </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
