import React from "react";
import Clients from "../../images/Clients.JPG"
import "./style.css";

function AboutPageInfo() {
    return (


        <div className="media content">
            <div className="media-body">
                <p className="mt-0 mb-1 shift AboutTitleSize">About Us</p>
                <br></br>
                <p className="font-resize">
                    <img src={Clients} className="ml-3 img-resize" alt="..."></img>
                    Plaster Restorations LLC is a family owned company founded in 2009, by Joel and Kristy Nafey.
                    We are dedicated to providing superior quality plastering solutions for residential
                    and commercial construction.  We are based in Central New Jersey, but service all
                    of NJ and the surrounding states.  Our team of plaster specialists look forward to assisting
                    you.
                </p>
            </div>
        </div>




    );
}

export default AboutPageInfo;