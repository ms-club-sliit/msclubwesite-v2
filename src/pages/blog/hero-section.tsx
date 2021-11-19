import React from "react";

const HeroSection: React.FC = () => (
  <div className="container mb-5">
    <div className="hero-section-bg" />
    <div className="row">
      <div className="col-sm-12 col-md-7 col-lg-7">
        <h1 className="blog-header-title">Explore Blogs</h1>
        <p className="blog-header-description">
          Read all the blog post which written by our students.
        </p>
        <button className="btn blog-primary-btn">
          Follow Medium Page
          <span>
            <i className="far fa-thumbs-up mx-2"></i>
          </span>
        </button>
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
