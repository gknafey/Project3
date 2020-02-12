import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import ReactCompareImage from 'react-compare-image';
import Before1 from "../../images/4BEFORE.jpg";
import After1 from "../../images/4AFTER.jpg";
import Before2 from "../../images/7BEFORE.jpg";
import After2 from "../../images/7AFTER.jpg";
import Before3 from "../../images/mason_A_edited.JPG";
import After3 from "../../images/mason_B_edited.JPG";
import Before4 from "../../images/mason_1_edited.JPG";
import After4 from "../../images/mason_2_edited.JPG";
import Before5 from "../../images/Buccleuch_1_edited.JPG";
import After5 from "../../images/Buccleuch_2_edited.JPG";
import Before6 from "../../images/NC_top_right_1_edited.JPG";
import After6 from "../../images/NC_top_right_2_edited.JPG";



function Portfolio1() {

    return (

        <div className="media portfolio-size">
            <div className="row1">
                <div className="col-md comparison-1">
                    <p className="name-style">3 Coat Plaster</p>
                    <h4>( Pull Slider in the middle of the picture to view before and after images. )</h4>
                    <div className="image-style-portfolio">
                        <ReactCompareImage leftImage={Before1} rightImage={After1} />
                    </div>
                    <Link to="/RequestForm"><button type="button" className="btn btn-lg customBtn comparison-button">More Samples</button></Link>
                    
                </div>

                <div className="comparison-3">
                    <p className="name-style">Grainger Auditorium North Carolina</p>
                    <h4>( Pull Slider in the middle of the picture to view before and after images. )</h4>
                    <div className="image-style-portfolio">
                        <ReactCompareImage leftImage={Before6} rightImage={After6} />
                    </div>
                    <Link to="/RequestForm"><button type="button" className="btn btn-lg customBtn comparison-button">More Samples</button></Link>
                </div>
                
                <div className="comparison-2">
                    <p className="name-style">Buccleuch</p>
                    <h4>( Pull Slider in the middle of the picture to view before and after images. )</h4>
                    <div className="image-style-portfolio">
                        <ReactCompareImage leftImage={Before5} rightImage={After5} />
                    </div>
                    <Link to="/RequestForm"><button type="button" className="btn btn-lg customBtn comparison-button">More Samples</button></Link>
                </div>
            </div>

            <div className="row2">

                <div className="comparison-3">
                    <p className="name-style">Ornamental Plaster</p>
                    <h4>( Pull Slider in the middle of the picture to view before and after images. )</h4>
                    <div className="image-style-portfolio">
                        <ReactCompareImage leftImage={Before2} rightImage={After2} />
                    </div>
                    <Link to="/RequestForm"><button type="button" className="btn btn-lg customBtn comparison-button">More Samples</button></Link>
                </div>

                <div className="comparison-3">
                    <p className="name-style">Masonic Lobby</p>
                    <h4>( Pull Slider in the middle of the picture to view before and after images. )</h4>
                    <div className="image-style-portfolio">
                        <ReactCompareImage leftImage={Before3} rightImage={After3} />
                    </div>
                    <Link to="/RequestForm"><button type="button" className="btn btn-lg customBtn comparison-button">More Samples</button></Link>
                </div>

                <div className="comparison-2">
                    <p className="name-style">Masonic Meeting Hall</p>
                    <h4>( Pull Slider in the middle of the picture to view before and after images. )</h4>
                    <div className="image-style-portfolio">
                        <ReactCompareImage leftImage={Before4} rightImage={After4} />
                    </div>
                    <Link to="/RequestForm"><button type="button" className="btn btn-lg customBtn comparison-button">More Samples</button></Link>
                </div>

                
            </div>

        </div>





    );
}

export default Portfolio1;