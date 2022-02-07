import React from 'react';
import EventList from './event-list-section';
import HeroSection from './hero-section';
import ScrollToTop from "react-scroll-to-top";

const Events: React.FC = () => (
  <div>
    <ScrollToTop smooth style={{marginBottom:60,right:35}}/>
    <HeroSection />
    <EventList />
  </div>
);

export default Events;