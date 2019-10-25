import React from "react";
import "./style.css";
import Logo from "../../images/final.png"

function Nav() {
  return (
    <nav className="navbar">

      <a className="navbar-brand " href="/">
        <img className="logo" src={Logo}></img>
      </a>
      <ul className="nav justify-content-end">
      <li className="nav-item">
          <a className="nav-item test" href="#">About Us</a>
        </li>
        <li className="nav-item">
          <p className="nav-item" style={{"color": "#e5cdaa"}} >&nbsp;|&nbsp;</p>
        </li>
        <li className="nav-item">
          <a className="nav-item test" href="#">Portfolio</a>
        </li>
        <li className="nav-item">
          <p className="nav-item" style={{"color": "#e5cdaa"}}>&nbsp;|&nbsp;</p>
        </li>
        <li className="nav-item">
          <a className="nav-item test"  href="#">Services</a>
        </li>
        <li className="nav-item">
          <p className="nav-item" style={{"color": "#e5cdaa"}}>&nbsp;|&nbsp;</p>
        </li>
        <li className="nav-item">
          <a className="nav-item test"  href="#">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
