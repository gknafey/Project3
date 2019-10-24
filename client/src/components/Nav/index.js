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
          <a class="nav-link" href="#">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact Us</a>
        </li>
      </ul>


    </nav>
  );
}

export default Nav;
