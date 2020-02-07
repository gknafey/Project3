import React from "react";
import "./style.css";
import Before1 from "../../images/4BEFORE.jpg"
import After1 from "../../images/4AFTER.jpg"
import Before2 from "../../images/7BEFORE.jpg"
import After2 from "../../images/7AFTER.jpg"



function Portfolio1() {
    
    return (

        
            <div className="media content portfolio-size">
            <div className="media-body">
            <span><p><span className="beforeAfter">Before</span> <span className="beforeAfter1">After New Construction</span> <span className="beforeAfter2">Before</span> <span className="beforeAfter3">After Ornamental</span></p></span>  
            <img className="theseImgs" src={Before1} alt="" />
            <img className="theseImgs" src={After1} alt="" />
            
            <img className="theseImg" src={Before2} alt="" />
            <img className="theseImg" src={After2} alt="" />
            </div>
        </div>



    );
}

export default Portfolio1;