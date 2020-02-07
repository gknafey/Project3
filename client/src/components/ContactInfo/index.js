import React from "react";
import Logo from "../../images/final.png"
import "./style.css";

function ContactInfo() {
    return (


        <div className="media contact-info">
            <div className="media-body contact-text">
                <h1 className="mt-0 mb-1 shift-right titleOrient">Contact Information</h1>
                <img src={Logo} className=" img-logo-contact" alt="..."></img>
                <br></br>
                <ul>
                    <li className="contact-text-size">Owner: Joel W. Nafey</li>
                    <li className="contact-text-size">Phone: (908)-581-2151</li>
                    <li className="contact-text-size">Email: plaster.restorations@gmail.com</li>
                    <li className="contact-text-size">Located: Milltown, NJ</li>
                </ul>
            </div>
        </div>




    );
}

export default ContactInfo;