import React from 'react';
import UpcomingCard from '../../components/card-upcoming';
import webinar from '../../data/UpcomingWebinarsData.json';

const UpcomingWebinarSection: React.FC = () => (
  <div>
      <UpcomingCard carouselTitle="Upcoming Webinars" item={webinar.data} rightSide={true} />
  </div>
);

export default UpcomingWebinarSection;