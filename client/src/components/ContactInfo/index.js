import React from "react";
import Owner from "../../images/Owner.jpg"
import "./style.css";

function ContactInfo() {
    return (


        <div className="media contact-info">
            <div className="media-body">
                <h1 className="mt-0 mb-1 shift-right">Contact Information</h1>
                <img src={Owner} className="ml-3 img-orientation" alt="..."></img>
                <br></br>
                <ul>
                    <li>Name: Joel W. Nafey</li>
                    <li>Phone: (908)-581-2151</li>
                    <li>Email: gknafey@gmail.com</li>
                    <li>Located: Milltown, NJ</li>
                </ul>
            </div>
        </div>




    );
}

export default ContactInfo;