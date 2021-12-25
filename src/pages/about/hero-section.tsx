import React from "react";
import {translation} from '../../locales/en-US/translation.json';

const HeroSection: React.FC = () => (
  <div>
    <div className=" header">
      <div className="hero-section-bg" />
      <div className="row">
        <div className="col-md-6">
          <p className="about-us-header-title">{translation.label["about-hero-title"]}</p>
          <p className="about-us-header-description">
            {translation.label["about-hero-description"]}
          </p>
        </div>
        <div className="col-md-6 header-img">
          <div className="d-flex justify-content-center">
            <img
              src="/assets/aboutus/aboutus-header-img.jpg"
              alt="About Us header"
              className="about-us-header-img"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;
