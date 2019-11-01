import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from "../../images/final.png"

function Nav() {
  return (
    <nav className="navbar">

      <a className="navbar-brand " href="/">
        <Link to="/"> <img className="logo" src={Logo}></img> </Link>
      </a>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link to="/"> <a className="nav-item test" href="#">Home</a> </Link>
        </li>
        <li className="nav-item">
          <p className="nav-item" style={{ "color": "#e5cdaa" }}>&nbsp;|&nbsp;</p>
        </li>
        <li className="nav-item">
          <Link to="/AboutUs"> <a className="nav-item test" href="#">About Us</a> </Link>
        </li>
        <li className="nav-item">
          <p className="nav-item" style={{ "color": "#e5cdaa" }} >&nbsp;|&nbsp;</p>
        </li>
        <li className="nav-item">
          <Link to="/Portfolio"> <a className="nav-item test" href="#">Portfolio</a> </Link>
        </li>
        <li className="nav-item">
          <p className="nav-item" style={{ "color": "#e5cdaa" }}>&nbsp;|&nbsp;</p>
        </li>
        <li className="nav-item">
          <Link to="/Services"> <a className="nav-item test" href="#">Services</a> </Link>
        </li>
        <li className="nav-item">
          <p className="nav-item" style={{ "color": "#e5cdaa" }}>&nbsp;|&nbsp;</p>
        </li>
        <li className="nav-item">
          <Link to="/ContactUs"> <a className="nav-item test" href="#">Contact Us</a> </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
