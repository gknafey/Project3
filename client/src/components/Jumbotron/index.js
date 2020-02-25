import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return (
    <div
      style={{ clear: "both", textAlign: "center", margin: 0 }} className="jumbotron jumboBorder">
      {children}
    </div>
  );
}

export default Jumbotron;
