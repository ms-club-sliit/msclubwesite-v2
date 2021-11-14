import React from "react";
import AboutHeaderImage from "../../assets/flat-illustrations/aboutus-header-img.jpg";
import content from '../../data/AboutSectionData.json';

const HeroSection: React.FC = () => (
  <div>
    <div className="container-fluid overlay header">
      <div className="hero-section-bg" />
      <div className="row">
        <div className="col-md-6">
          <p className="header-title">About Us</p>
          <p className="header-content">{content.description}</p>
        </div>
        <div className="col-md-6 header-img">
          <div className="d-flex justify-content-right">
            <img
              src={AboutHeaderImage}
              alt="About Us header"
              className="img-fluid imgrounded-xl shadow d-sm-block header-img"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;
