import React from "react";
import OwlCarousel from 'react-owl-carousel';
import pioneers from '../../data/PioneersData.json';

const responsive = {
    0: {
      items: 1.3,
    },
    370: {
      items: 1.2,
    },
    411: {
      items: 1.3,
    },
    414: {
      items: 1.3,
    },
    600: {
      items: 2,
    },
    768: {
      items: 2.25,
    },
    1000: {
      items: 3,
    },
    1200: {
      items: 3,
    },
    1400: {
      items: 3.3,
    },
    1700: {
      items: 4.5,
    },
    2000: {
      items: 5,
    },
  };

const PioneersSection: React.FC = () => (
  <div>
      <div className="row justify-content-center text-center mt-3">
        <h2 className="topic text-center mb-3">
          <strong>PIONEERS OF MS CLUB</strong>
        </h2>
        <div>
          <OwlCarousel className="owl-theme" dots={false} loop responsive={responsive}>
            {pioneers.data.map((pioneer) => (
              <div key={pioneer.id} className="img__wrap">
                <img src={pioneer.image} className="image-fluid pioneer_image" alt={pioneer.name} />
                <p className="img__description">
                  <span className="img__description_background">{pioneer.name}</span>
                </p>
              </div>
            ))}
          </OwlCarousel>
          <hr className="PioneerDivider" />
        </div>
      </div>
  </div>
);

export default PioneersSection;
