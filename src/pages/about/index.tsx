import React from "react";
import HeroSection from "./hero-section";
import PioneersSection from "./pioneers-section";
import VisionSection from "./vision-section";

const About: React.FC = () => (
  <div className="container">
    <HeroSection />
    <PioneersSection />
    <VisionSection />
  </div>
);

export default About;
