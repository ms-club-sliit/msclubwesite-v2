import React from 'react';
import CardCarousel from '../../components/card-carousel';
import webinars from '../../data/PastWebinarsData.json';

const PastWebinarSection: React.FC = () => (
  <div>
      <CardCarousel carouselTitle="Past Webinars" items={webinars.data}  />
  </div>
);

export default PastWebinarSection;