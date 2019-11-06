import React from "react";
import "./style.css";

function ReferBtn(props) {
  return (
    <span className="refer-btn" {...props} role="button" tabIndex="0">
      Refer Job
    </span>
  );
}

export default ReferBtn;