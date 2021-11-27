import React from "react";
import HeroSection from "./hero-section";
import ContactFormSection from "./contact-form-section";
import ScrollToTop from "react-scroll-to-top";

const JoinUs: React.FC = () => (
  <div className="container">
    <ScrollToTop smooth />
    <HeroSection />
    <ContactFormSection />
  </div>
);

export default JoinUs;
