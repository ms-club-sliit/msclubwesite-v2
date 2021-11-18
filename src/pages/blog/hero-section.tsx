import React from "react";

const HeroSection: React.FC = () => (
  <div className="container mb-5">
    <div className="hero-section-bg" />
    <div className="row">
      <div className="col-sm-12 col-md-6 col-lg-6">
        <h1 className="blog-header-title">Explore Blogs 
          <span>
            <img src="/assets/emoji/hand_write.png" className="blog-emoji" />
          </span> 
        </h1>
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

      <div className="col-sm-12 col-md-6 col-lg-6">
        <div className="d-felx justify-content-center">
          <img src="/assets/blogs_header.png" alt="home header" className="blog-header-img" />
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;
