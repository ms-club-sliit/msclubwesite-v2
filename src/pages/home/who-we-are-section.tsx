import React from "react";
import {translation} from '../../locales/en-US/translation.json';

const WhatWeDoSection: React.FC = () => (
  <div className="who-we-are-section">
    <h2 className="text-center header">{translation.label["home-who-we-are-title"]}</h2>
    <div className="container">
      <div className="row mt-5 mb-5">
        <div className="col-md-6 col-sm-12 home-who-are-section-image">
          <div className="d-flex justify-content-center">
            <img
              alt="who-we-are"
              className="image"
              src="/assets/home_header.png"
            />
          </div>
        </div>
        <div className="col-md-6 col-sm-12 mt-2">
          <p className="description">{translation.label["home-who-we-are-description1"]}</p>
          <p className="description">{translation.label["home-who-we-are-description2"]}</p>
        </div>
      </div>
    </div>
  </div>
);

export default WhatWeDoSection;
