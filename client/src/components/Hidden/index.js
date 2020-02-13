import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const signOut = () => {
    localStorage.removeItem('user');
    window.location.reload(false);
}

function HiddenLink() {
    

    return (
        <div id="hidden" style={{display: "none"}} className="quickContact hiddenBorder">
            <span className="shiftLeft">
            <Link to="/JobManagement" className="nav-item test color" href="#">Job Management </Link>
            </span>
            <span className="nav-item" style={{ "color": "#e5cdaa" }}>&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</span>

            <span className="shiftLeft">
            <Link to="/Archived" className="nav-item test color" href="#">Archived </Link>
            </span>

            <span className="nav-item" style={{ "color": "#e5cdaa" }}>&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</span>

            <span className="shiftLeft">
            <Link to="/" onClick={signOut} className="nav-item test color" href="#">Sign Out </Link>
            </span>
        </div>
    )
}

export default HiddenLink;