import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import ReactCompareImage from 'react-compare-image';
import Before1 from "../../images/4BEFORE.jpg"
import After1 from "../../images/4AFTER.jpg"
import Before2 from "../../images/7BEFORE.jpg"
import After2 from "../../images/7AFTER.jpg"



function Portfolio1() {
    
    return (

        
            <div className="media portfolio-size">
            <div className="comparison-1">
            <p className="name-style">3 Coat Plaster</p>
            <div className="image-style-portfolio">
            <ReactCompareImage leftImage={Before1} rightImage={After1} />
            </div>
            <Link to="/RequestForm"><button type="button" className="btn btn-lg customBtn comparison-button">More Samples</button></Link>
            </div>

            <div className="comparison-2">
            <p className="name-style">Ornamental Plaster</p>
            <div className="image-style-portfolio">
            <ReactCompareImage leftImage={Before2} rightImage={After2} />
            </div>
            <Link to="/RequestForm"><button type="button" className="btn btn-lg customBtn comparison-button">More Samples</button></Link>
            </div>
        </div>

        



    );
}

export default Portfolio1;