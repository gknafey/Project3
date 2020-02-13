import React from "react";
import "./style.css";
 
function ArchiveBtn(props) {
  return (
    <span className="delete-btn" {...props} role="button" tabIndex="0">
      Archive
    </span>
  );
}

export default ArchiveBtn;
