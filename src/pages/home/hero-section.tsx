import React from 'react';

const HeroSection: React.FC = () => (
  <div className="container-fluid">
    <div className="hero-section-bg" />
    <div className="row">
      <div className="col-sm-12 col-md-6 col-lg-6">
        <h1>MS CLUB OF SLIIT</h1>
        <p>A volunteer-driven student community aiming to bridge the skill gap between an Undergraduate and an Industry Professional.</p>
        <button className="home-primary-btn">
          JOIN NOW
        </button>
      </div>

      <div className="col-sm-12 col-md-6 col-lg-6">

      </div>
    </div>
  </div>
);

export default HeroSection;