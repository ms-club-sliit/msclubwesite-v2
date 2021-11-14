import React from 'react';
import CardCarousel from '../../components/card-carousel';
import speakers from '../../data/TopSpeakersData.json';

const TopSpeakersSection: React.FC = () => (
  <div>
      <CardCarousel carouselTitle="Top Speakers" items={speakers.data}  />
  </div>
);

export default TopSpeakersSection;