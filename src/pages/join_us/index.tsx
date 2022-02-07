import React from "react";
import HeroSection from "./hero-section";
import JoinUsFormSection from "./join-us-form-section";
import ScrollToTop from "react-scroll-to-top";

const JoinUs: React.FC = () => (
  <div className="container">
    <ScrollToTop smooth  style={{marginBottom:60}}/>
    <HeroSection />
    <JoinUsFormSection />
  </div>
);

export default JoinUs;
