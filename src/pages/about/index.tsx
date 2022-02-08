import React from "react";
import HeroSection from "./hero-section";
import PioneersSection from "./pioneers-section";
import VisionSection from "./vision-section";
import ScrollToTop from "react-scroll-to-top";

const About: React.FC = () => (
  <div className="container">
    <ScrollToTop smooth className="scroll-to-top"/>
    <HeroSection />
    <PioneersSection />
    <VisionSection />
  </div>
);

export default About;
