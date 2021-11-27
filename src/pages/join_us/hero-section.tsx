import React from 'react';

const HeroSection: React.FC = () => (
  <div className="container mb-5">
    <div className="hero-section-bg" />
    <div className="row">
      <div className="col-sm-12 col-md-7 col-lg-7">
        <h1 className="contact-us-header-title">Application Form</h1>
        <p className="contact-us-header-description">
          Join with MS CLUB OF SLIIT
        </p>

        {/* <div className="d-flex justify-content-start mb-2">
          <i className="fab fa-facebook fa-2x social-icon" />
          <span className="social-facebook-link">facebook.com/msclubsliit</span>
        </div>
        <div className="d-flex justify-content-start mb-2">
          <i className="fab fa-instagram fa-2x social-icon" />
          <span className="social-instagram-link">instagram.com/msclub.sliit</span>
        </div>
        <div className="d-flex justify-content-start mb-2">
          <i className="fab fa-linkedin fa-2x social-icon" />
          <span className="social-linkedin-link">linkedin.com/msclubsliit</span>
        </div>
        <div className="d-flex justify-content-start mb-2">
          <i className="fab fa-youtube fa-2x social-icon" style={{ color: '#FF0000' }} />
          <span className="social-youtube-link">youtube.com/msclubsliit</span>
        </div>
        <div className="d-flex justify-content-start mb-2">
          <i className="fab fa-github fa-2x social-icon" />
          <span className="social-github-link">github.com/msclubsliit</span>
        </div> */}
      </div>

      <div className="col-sm-12 col-md-5 col-lg-5">
        <div className="d-felx justify-content-center">
          <img src="/assets/contact_us_header.png" alt="home header" className="contact-us-header-img" />
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;