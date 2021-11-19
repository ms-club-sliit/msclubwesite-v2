import React from 'react';

const HeroSection: React.FC = () => (
  <div className="container mb-5">
    <div className="hero-section-bg" />
    <div className="row">
      <div className="col-sm-12 col-md-7 col-lg-7">
        <h1 className="event-header-title">Explore Events</h1>
        <p className="event-header-description">
          Explore all the events organized by our students.
        </p>
        <button className="btn event-primary-btn">
          More Information on
          <span>
            <i className="fab fa-facebook-square fa-lg mx-2 mt-1"></i>
          </span>
        </button>

        <button className="btn event-youtube-btn">
          Subscribe on
          <span>
            <i className="fab fa-youtube fa-lg mx-2 mt-1"></i>
          </span>
        </button>
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