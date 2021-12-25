import React from "react";
import OwlCarousel from 'react-owl-carousel';
import pioneers from '../../data/PioneersData.json';
import { SLIDER_RESPONSIVE_BREAKPOINTS } from '../../constants';
import {translation} from '../../locales/en-US/translation.json';

const PioneersSection: React.FC = () => (
  <div className="pioneers">
    <div className="row justify-content-center text-center">
      <h2 className="topic text-center about-us-pioneer-header">
        <strong>{translation.label["about-pioneers-title"]}</strong>
      </h2>
      <div>
        <OwlCarousel className="owl-theme" dots={false} loop responsive={SLIDER_RESPONSIVE_BREAKPOINTS}>
          {pioneers.data.map((pioneer) => (
            <div key={pioneer.id} className="pioneer-section">
              <img src={pioneer.image} className="pioneer-img" alt={pioneer.name} />
              <p className="pioneer-name">
                <span>{pioneer.name}</span>
              </p>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  </div>
);

export default PioneersSection;
