import React from "react";
import "./style.css";
import OurTeam from "../../images/OurTeam.JPG"
import WorkingImg from "../../images/Working.JPG"


function AboutPageImages() {
    return (

            <span className="shape">

            <img className="img fluid aboutImg3" src={WorkingImg} alt="Porfolio Image Not Found"></img>

            <img className="img fluid aboutImg2" src={OurTeam} alt="Porfolio Image Not Found"></img>
            
            </span>
           
        

    );
}

export default AboutPageImages;