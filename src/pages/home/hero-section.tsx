import React from 'react';

const HeroSection: React.FC = () => (
  <div className="container mb-5">
    <div className="hero-section-bg" />
    <div className="row">
      <div className="col-sm-12 col-md-6 col-lg-6">
        <h1 className="home-header-title">MS CLUB OF SLIIT</h1>
        <p className="home-header-description">A volunteer-driven student community aiming to bridge the skill gap between an Undergraduate and an Industry Professional.</p>
        <button className="btn home-primary-btn">
          Join Now
        </button>
      </div>

      <div className="col-sm-12 col-md-6 col-lg-6">
        <img src="/assets/home_header.png" alt="home header" className="home-header-img" />
      </div>
    </div>
  </div>
);

export default HeroSection;