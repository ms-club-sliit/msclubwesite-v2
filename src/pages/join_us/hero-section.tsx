import React from 'react';

const HeroSection: React.FC = () => (
  <div className="container mb-5">
    <div className="hero-section-bg" />
    <div className="row">
      <div className="col-sm-12 col-md-7 col-lg-7">
        <h1 className="contact-us-header-title">Join with Us</h1>
        <p className="contact-us-header-description">
          Fill your application form today
        </p>
      </div>

      <div className="col-sm-12 col-md-5 col-lg-5">
        <div className="d-felx justify-content-center">
          <img src="/assets/join_us_header.svg" alt="home header" className="contact-us-header-img" />
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;