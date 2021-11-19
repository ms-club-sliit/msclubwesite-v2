import React from 'react';
import EventList from './event-list-section';
import HeroSection from './hero-section';

const Events: React.FC = () => (
  <div>
    <HeroSection />
    <EventList />
  </div>
);

export default Events;