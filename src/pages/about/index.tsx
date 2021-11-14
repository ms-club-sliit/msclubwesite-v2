import React from "react";
import HeroSection from "./hero-section";
import PioneersSection from "./pioneers-section";
import VisionSection from "./vision-section";
import WhatWeDoSection from "./what-we-do-section";

const About: React.FC = () => (
  <div className="container">
    <HeroSection />
    <PioneersSection />
    <VisionSection />
    <WhatWeDoSection/>
  </div>
);

export default About;
