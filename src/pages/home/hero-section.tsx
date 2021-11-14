import React from 'react';
import HeroHeaderImage from '../../assets/flat-illustrations/header-image.svg';

const HeroSection: React.FC = () => (
  <div>
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
      <img src={HeroHeaderImage} alt="home header img" className="home-header-img" />
      </div>
    </div>
  </div>
);

export default HeroSection;