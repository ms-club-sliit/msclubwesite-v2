import React from 'react';
import ts from '../../locales/en-US/translation.json';

let translation = ts.translation;

const HeroSection: React.FC = () => (
  <div className="container mb-5">
    <div className="hero-section-bg" />
    <div className="row">
      <div className="col-sm-12 col-md-7 col-lg-7">
        <h1 className="event-header-title">{translation.label["event-hero-title"]}</h1>
        <p className="event-header-description">
        {translation.label["event-hero-description"]}
        </p>
        <a
          href="https://www.facebook.com/msclubsliit"
          target="_blank"
          rel="noopener noreferrer"
        >
        <button className="btn event-primary-btn">
          {translation.button["more-info-fb"]}
          <span>
            <i className="fab fa-facebook-square fa-lg mx-2 mt-1"></i>
          </span>
        </button>
        </a>

        <a
          href="https://www.youtube.com/channel/UCoSzsIgJZY52iiWu5YNI0Xg"
          target="_blank"
          rel="noopener noreferrer"
        >
        <button className="btn event-youtube-btn">
          {translation.button["subs-yt"]}
          <span>
            <i className="fab fa-youtube fa-lg mx-2 mt-1"></i>
          </span>
        </button>
        </a>
      </div>

      <div className="col-sm-12 col-md-5 col-lg-5">
        <div className="d-felx justify-content-center">
          <img src="/assets/events_header.png" alt="home header" className="event-header-img" />
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;