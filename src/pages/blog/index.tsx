import React from "react";
import BlogList from "./blog-list-section";
import HeroSection from "./hero-section";

const Blogs: React.FC = () => (
  <div className="container">
      <HeroSection/>
      <BlogList/>
  </div>
);

export default Blogs;
