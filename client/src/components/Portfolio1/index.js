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
import images1 from "../../images/images1.JPG";
import images2 from "../../images/images2.JPG";
import images3 from "../../images/images3.JPG";

function Portfolio1() {

    return (
        <div className="borderPortfolio">

            <div className="media morePhotos-size">
                <div className="morePhotos-1">
                    <p className="name-style">Link To More Portfolio Pictures</p>
                    <h4 className="mobilePort">  </h4>
                    
                    <img className="imagePortLink" alt="alt here" src={images1}></img>
                    <img className="imagePortLink3" alt="alt here" src={images3}></img>
                    <img className="imagePortLink2" alt="alt here" src={images2}></img>
                    
                    <Link to="/PortfolioImages"><button type="button" className="btn btn-lg customBtn morePhotos-button">Click Here for More Photos</button></Link>

                </div>
            </div>
            <h2 className="BAndFSection">Before And After Photos</h2>
            <div className="media portfolio-size">
                <div className="row1">
                    <div className="comparison-1">
                        <p className="name-style">Veneer Coat Plastering</p>
                        <h4 className="mobilePort">( Pull Slider in the middle of the picture to view before and after images. )</h4>
                        <div className="image-style-portfolio">
                            <ReactCompareImage leftImage={Before1} rightImage={After1} />
                        </div>
                        <Link to="/PortfolioImages"><button type="button" className="btn btn-lg customBtn comparison-button">More Samples</button></Link>

                    </div>

                    <div className="comparison-3">
                        <p className="name-style">Historic Grainger Auditorium | North Carolina</p>
                        <h4 className="mobilePort">( Pull Slider in the middle of the picture to view before and after images. )</h4>
                        <div className="image-style-portfolio">
                            <ReactCompareImage leftImage={Before6} rightImage={After6} />
                        </div>
                        <Link to="/PortfolioImages"><button type="button" className="btn btn-lg customBtn comparison-button">More Samples</button></Link>
                    </div>

                    <div className="comparison-2">
                        <p className="name-style">Buccleuch Mansion | New Brunswick, NJ</p>
                        <h4 className="mobilePort">( Pull Slider in the middle of the picture to view before and after images. )</h4>
                        <div className="image-style-portfolio">
                            <ReactCompareImage leftImage={Before5} rightImage={After5} />
                        </div>
                        <Link to="/PortfolioImages"><button type="button" className="btn btn-lg customBtn comparison-button">More Samples</button></Link>
                    </div>
                </div>

                <div className="row2">

                    <div className="comparison-3">
                        <p className="name-style">Ornamental Plaster Repair</p>
                        <h4 className="mobilePort">( Pull Slider in the middle of the picture or tap sides of the picture to view before and after images. )</h4>
                        <div className="image-style-portfolio">
                            <ReactCompareImage leftImage={Before2} rightImage={After2} />
                        </div>
                        <Link to="/PortfolioImages"><button type="button" className="btn btn-lg customBtn comparison-button">More Samples</button></Link>
                    </div>

                    <div className="comparison-3">
                        <p className="name-style"> Historic Masonic Temple Lobby | Trenton, NJ</p>
                        <h4 className="mobilePort">( Pull Slider in the middle of the picture or tap sides of the picture to view before and after images. )</h4>
                        <div className="image-style-portfolio">
                            <ReactCompareImage leftImage={Before3} rightImage={After3} />
                        </div>
                        <Link to="/PortfolioImages"><button type="button" className="btn btn-lg customBtn comparison-button">More Samples</button></Link>
                    </div>

                    <div className="comparison-2">
                        <p className="name-style">Historic Masonic Temple | Trenton, NJ</p>
                        <h4 className="mobilePort">( Pull Slider in the middle of the picture or tap sides of the picture to view before and after images. )</h4>
                        <div className="image-style-portfolio">
                            <ReactCompareImage leftImage={Before4} rightImage={After4} />
                        </div>
                        <Link to="/PortfolioImages"><button type="button" className="btn btn-lg customBtn comparison-button">More Samples</button></Link>
                    </div>


                </div>

            </div>

        </div>



    );
}

export default Portfolio1;