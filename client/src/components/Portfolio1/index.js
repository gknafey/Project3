import React from "react";
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
           
            <ReactCompareImage className="theseImgs" leftImage={Before1} rightImage={After1} />
            
            </div>

            <div className="comparison-2">
            <ReactCompareImage className="theseImg" leftImage={Before2} rightImage={After2} />
            
            </div>
        </div>

        



    );
}

export default Portfolio1;