import React from "react";
import "./style.css";


function AcceptBtn(props) {
  return (
    <span className="accept-btn" {...props} role="button" tabIndex="0">
      Accept Job
    </span>
  );
}

export default AcceptBtn;