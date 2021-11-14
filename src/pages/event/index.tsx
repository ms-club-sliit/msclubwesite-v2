import React from "react";
import PastEventSection from "./past-events-section";
import PastWebinarSection from "./past-webinars-section";
import HeroSection from "./hero-section";
import UpcomingWebinarSection from "./upcoming-webinar-section";
import UpcomingEventSection from "./upcoming-event-section";
import TopSpeakersSection from "./top-speakers-section";

const Event: React.FC = () => (
  <div className="container">
    <HeroSection />
    <UpcomingWebinarSection />
    <PastWebinarSection />
    <UpcomingEventSection />
    <PastEventSection />
    <TopSpeakersSection />
  </div>
);

export default Event;
