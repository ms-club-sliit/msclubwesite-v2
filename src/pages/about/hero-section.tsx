import React from "react";

const HeroSection: React.FC = () => (
  <div>
    <div className=" header">
      <div className="hero-section-bg" />
      <div className="row">
        <div className="col-md-6">
          <p className="about-us-header-title">About Us</p>
          <p className="about-us-header-description">
            A volunteer-driven student community aiming to bridge the skill gap between an Undergraduate and an Industry Professional.
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
