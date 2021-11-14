import React from 'react';
import UpcomingCard from '../../components/card-upcoming';
import event from '../../data/UpcomingEventData.json';

const UpcomingEventSection: React.FC = () => (
  <div>
      <UpcomingCard carouselTitle="Upcoming Events" item={event.data} rightSide={false} />
  </div>
);

export default UpcomingEventSection;