import React from "react";
import "./style.css";


function LinkBtn() {
  return (
    <span className="cover" tabIndex="0">
      <a><button type="button" className="btn btn-lg btn-block">About Us</button></a>
      <a><button type="button" className="btn btn-lg btn-block two">Request a Quote</button></a>
      <a><button type="button" className="btn btn-lg btn-block three">Full Portfolio</button></a>
    </span>
  );
}

export default LinkBtn;
