import React from "react";
import Owner from "../../images/Owner.jpg"
import "./style.css";

function ContactInfo() {
    return (


        <div className="media contact-info">
            <div className="media-body contact-text">
                <h1 className="mt-0 mb-1 shift-right titleOrient">Contact Information</h1>
                <img src={Owner} className="ml-3 img-orientation" alt="..."></img>
                <br></br>
                <ul>
                    <li className="contact-text-size">Name: Joel W. Nafey</li>
                    <li className="contact-text-size">Phone: (908)-581-2151</li>
                    <li className="contact-text-size">Email: gknafey@gmail.com</li>
                    <li className="contact-text-size">Located: Milltown, NJ</li>
                </ul>
            </div>
        </div>




    );
}

export default ContactInfo;