import React from 'react';
import PastEvents from './past-events';
import PastWebinars from './past-webina';
import TopSpeakers from './top-speakers';

const EventList: React.FC = () => (
  <div>
    <PastWebinars />
    <PastEvents />
    <TopSpeakers />
  </div>
);

export default EventList;