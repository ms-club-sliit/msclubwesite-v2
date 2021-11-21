import React from "react";
import BlogsSection from "./blogs-section";
import HeroSection from "./hero-section";
import PastEventSection from "./past-events-section";
import PastWebinarSection from "./past-webinars-section";
import WhatWeDoSection from "./who-we-are-section";
import ScrollToTop from "react-scroll-to-top";

const Home: React.FC = () => (
  <div>
    <ScrollToTop smooth />
    <HeroSection />
    <WhatWeDoSection />
    <BlogsSection />
    <PastWebinarSection />
    <PastEventSection />
  </div>
);

export default Home;
