import React from "react";
import HeroSection from "./hero-section";
import ContactFormSection from "./contact-form-section";
import ScrollToTop from "react-scroll-to-top";

const Contact: React.FC = () => (
  <div className="container">
    <ScrollToTop smooth style={{marginBottom:60}}/>
    <HeroSection />
    <ContactFormSection />
  </div>
);

export default Contact;
