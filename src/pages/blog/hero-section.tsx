import React from "react";
import {translation} from '../../locales/en-US/translation.json';

const HeroSection: React.FC = () => (
  <div className="container mb-5">
    <div className="hero-section-bg" />
    <div className="row">
      <div className="col-sm-12 col-md-7 col-lg-7">
        <h1 className="blog-header-title">{translation.label["blog-hero-title"]}</h1>
        <p className="blog-header-description">
          {translation.label["blog-hero-description"]}
        </p>
        <a
          href="https://medium.com/ms-club-of-sliit"
          target="_blank"
          rel="noopener noreferrer"
        >
        <button className="btn blog-primary-btn">
          {translation.button["follow-medium"]}
          <span>
            <i className="far fa-thumbs-up mx-2"></i>
          </span>
        </button>
        </a>
      </div>

      <div className="col-sm-12 col-md-5 col-lg-5">
        <div className="d-felx justify-content-center">
          <img src="/assets/blogs_header.png" alt="home header" className="blog-header-img" />
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;
