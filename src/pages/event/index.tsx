import React from 'react';
import EventList from './event-list-section';
import HeroSection from './hero-section';
import ScrollToTop from "react-scroll-to-top";

const Events: React.FC = () => (
  <div>
    <ScrollToTop smooth />
    <HeroSection />
    <EventList />
  </div>
);

export default Events;