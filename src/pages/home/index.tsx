import React from "react";
import BlogsSection from "./blogs-section";
import HeroSection from "./hero-section";
import PastEventSection from "./past-events-section";
import PastWebinarSection from "./past-webinars-section";
import WhatWeDoSection from "./what-we-do-section";

const Home: React.FC = () => (
  <div className="container">
    <HeroSection />
    <WhatWeDoSection />
    <div className="polygon-div mb-4">
      <BlogsSection />
      <PastWebinarSection />
    </div>
    <PastEventSection />
  </div>
);

export default Home;
