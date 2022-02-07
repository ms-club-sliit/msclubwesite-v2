import React from "react";
import BlogList from "./blog-list-section";
import HeroSection from "./hero-section";
import ScrollToTop from "react-scroll-to-top";

const Blogs: React.FC = () => (
  <div className="container">
      <ScrollToTop smooth style={{marginBottom:60}}/>
      <HeroSection/>
      <BlogList/>
  </div>
);

export default Blogs;
