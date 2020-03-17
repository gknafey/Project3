import React from "react";
import Logo from "../../images/final.webp"
import "./style.css";

function ContactInfo() {
    return (


        <div className="media contact-info">
            <div className="media-body contact-text">
                <h1 className="mt-0 mb-1 shift-right titleOrient">Contact Information</h1>
                <img src={Logo} className=" img-logo-contact" alt="..."></img>
                <br></br>
                <ul>
                    
                    <li className="contact-text-size">Phone: <a className="emailAndPhone" href="tel:908-581-2151">908-581-2151</a></li>
                    <li className="contact-text-size">Email: <a className="emailAndPhone" href="mailto:plaster.restorations@gmail.com">plaster.restorations@gmail.com </a></li>
                    <li className="contact-text-size">Located: Milltown, NJ</li>
                </ul>
            </div>
        </div>




    );
}

export default ContactInfo;