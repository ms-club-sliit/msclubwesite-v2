import React from "react";
import HeroSection from "./hero-section";
import PioneersSection from "./pioneers-section";
import VisionSection from "./vision-section";
import ScrollToTop from "react-scroll-to-top";

const About: React.FC = () => (
  <div className="container">
    <ScrollToTop smooth style={{marginBottom:60,right:35}}/>
    <HeroSection />
    <PioneersSection />
    <VisionSection />
  </div>
);

export default About;
