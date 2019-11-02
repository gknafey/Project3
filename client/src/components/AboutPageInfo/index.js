import React from "react";
import Clients from "../../images/Clients.JPG"
import "./style.css";

function AboutPageInfo() {
    return (

        
        <div className="media content">
            <div className="media-body">
                <h1 className="mt-0 mb-1 shift">About Us</h1>
                <br></br>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.

            </div>
            <img src={Clients} className="ml-3 img-resize" alt="..."></img>
        </div>
        



            );
        }
        
export default AboutPageInfo;