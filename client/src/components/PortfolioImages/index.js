import React from "react";
import { BigPictureGallery } from "react-bigpicture";
import a1 from "../../images/a1.JPG";
import a2 from "../../images/a2.JPG";
import a3 from "../../images/a3.JPG";
import b1 from "../../images/b1.JPG";
import b2 from "../../images/b2.JPG";
import b3 from "../../images/b3.JPG";
import b4 from "../../images/b4.JPG";
import b5 from "../../images/b5.JPG";
import b6 from "../../images/b6.JPG";
import b7 from "../../images/b7.JPG";
import b8 from "../../images/b8.JPG";
import b9 from "../../images/b9.JPG";
import b10 from "../../images/b10.JPG";
import b11 from "../../images/b11.JPG";
import b12 from "../../images/b12.JPG";
import "./style.css";




function PortfolioImages() {

    return (
        <div className="borderPortfolio">
            <h1 className="Gallery">Portfolio Gallery</h1>
            <div className="portfolioImagesback">
                <BigPictureGallery loop>
                    <img
                        className="Images-Portfolio"
                        zoomedSrc={a1}
                        src={a1}
                        caption="Heyyyy"
                        alt=""
                    />
                    <img
                        className="Images-Portfolio"
                        zoomedSrc={a2}
                        src={a2}
                        alt=""
                    />
                    <img
                        className="Images-Portfolio"
                        zoomedSrc={a3}
                        src={a3}
                        alt=""
                    />
                    <img
                        className="Images-Portfolio"
                        zoomedSrc={b1}
                        src={b1}
                        alt=""
                    />
                    <img
                        className="Images-Portfolio"
                        zoomedSrc={b2}
                        src={b2}
                        alt=""
                    />
                    <img
                        className="Images-Portfolio"
                        zoomedSrc={b3}
                        src={b3}
                        alt=""
                    />
                    <img
                        className="Images-Portfolio"
                        zoomedSrc={b4}
                        src={b4}
                        alt=""
                    />
                    <img
                        className="Images-Portfolio"
                        zoomedSrc={b5}
                        src={b5}
                        alt=""
                    />
                    <img
                        className="Images-Portfolio"
                        zoomedSrc={b6}
                        src={b6}
                        alt=""
                    />
                    <img
                        className="Images-Portfolio"
                        zoomedSrc={b7}
                        src={b7}
                        alt=""
                    />
                    <img
                        className="Images-Portfolio"
                        zoomedSrc={b8}
                        src={b8}
                        alt=""
                    />
                    <img
                        className="Images-Portfolio"
                        zoomedSrc={b9}
                        src={b9}
                        alt=""
                    />
                    <img
                        className="Images-Portfolio"
                        zoomedSrc={b10}
                        src={b10}
                        alt=""
                    />
                    <img
                        className="Images-Portfolio"
                        zoomedSrc={b11}
                        src={b11}
                        alt=""
                    />
                    <img
                        className="Images-Portfolio"
                        zoomedSrc={b12}
                        src={b12}
                        alt=""
                    />

                </BigPictureGallery>
            </div>



        </div>
    );

}

export default PortfolioImages;