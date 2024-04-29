import React from "react";
import ts from '../../locales/en-US/translation.json';

let translation = ts.translation;

const HeroSection: React.FC = () => (
  <div className="container mb-5">
    <div className="hero-section-bg" />

    <div className="row">
      <div className="col-sm-12 col-md-7 col-lg-7">
        <h1 className="contact-us-header-title">{translation.label["join-us-hero-title"]}</h1>
        <p className="contact-us-header-description">
          {translation.label["join-us-hero-description"]}
        </p>
        <div className="row">
          <div className="col-sm-12 col-md-7 col-lg-7">
            <div className="d-flex justify-content-start mb-2">
              <i className="fab fa-facebook fa-2x social-icon" />
              <span className="social-facebook-link">
                {translation.label["fb-link"]}
              </span>
            </div>
            <div className="d-flex justify-content-start mb-2">
              <i className="fab fa-instagram fa-2x social-icon" />
              <span className="social-instagram-link">
                {translation.label["instagram-link"]}
              </span>
            </div>
            <div className="d-flex justify-content-start mb-2">
              <i className="fab fa-linkedin fa-2x social-icon" />
              <span className="social-linkedin-link">
                {translation.label["linkedin-link"]}
              </span>
            </div>
            <div className="d-flex justify-content-start mb-2">
              <i
                className="fab fa-youtube fa-2x social-icon"
                style={{ color: "#FF0000" }}
              />
              <span className="social-youtube-link">
                {translation.label["yt-link"]}
              </span>
            </div>
            <div className="d-flex justify-content-start mb-2">
              <i className="fab fa-github fa-2x social-icon" />
              <span className="social-github-link">
                {translation.label["github-link"]}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-sm-12 col-md-5 col-lg-5">
        <div className="d-felx justify-content-center">
          <img
            src="/assets/join_us_header.svg"
            alt="home header"
            className="contact-us-header-img"
          />
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;
