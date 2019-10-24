import React from "react";
import "./style.css";
import Logo from "../../images/final.png"

function Nav() {
  return (
    <nav className="navbar">

      <a className="navbar-brand" href="/">
        <img className="logo" src={Logo}></img>
      </a>
      <ul class="nav justify-content-end">
      <li class="nav-item">
          <a class="" style={{"color": "#0C696F"}} href="#">About Us</a>
        </li>
        <li class="nav-item">
          <p class="nav-item" style={{"color": "#E3DBD7"}} >&nbsp;|&nbsp;</p>
        </li>
        <li class="nav-item">
          <a class="" style={{"color": "#0C696F"}} href="#">Portfolio</a>
        </li>
        <li class="nav-item">
          <p class="nav-item" style={{"color": "#E3DBD7"}}>&nbsp;|&nbsp;</p>
        </li>
        <li class="nav-item">
          <a class="" style={{"color": "#0C696F"}} href="#">Services</a>
        </li>
        <li class="nav-item">
          <p class="nav-item" style={{"color": "#E3DBD7"}}>&nbsp;|&nbsp;</p>
        </li>
        <li class="nav-item">
          <a class="" style={{"color": "#0C696F"}} href="#">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
