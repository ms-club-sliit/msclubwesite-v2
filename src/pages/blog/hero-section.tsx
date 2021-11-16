import React from "react";
import BlogHeroHeaderImage from '../../assets/flat-illustrations/blogsHeroVector.svg';

const HeroSection: React.FC = () => (
  <div className="container">
    <div className="row">
      <div className="col-sm-12 col-md-6 col-lg-6 text-div">
        <div className="col-12">
          <p className="exploreText">
            Explore <br /> Blogs
          </p>
        </div>
        <div className="col-12 event-search">
          <input type="text" className="form-control searchBox" />
          <button type="button" className="btn searchButton">
            <i className="fa fa-search" />
          </button>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-item-center">
        <img
          src={BlogHeroHeaderImage}
          alt="Event header img"
          className="event-header-img"
        />
      </div>
    </div>
  </div>
);

export default HeroSection;
