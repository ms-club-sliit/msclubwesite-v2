import React from "react";

const WhatWeDoSection: React.FC = () => (
  <div className="who-we-are-section">
    <h2 className="text-center header">Who Are We?</h2>
    <div className="container">
      <div className="row mt-5 mb-5">
        <div className="col-md-6 col-sm-12 home-who-are-section-image">
          <div className="d-flex justify-content-center">
            <img
              alt="who-we-are"
              className="image"
              src="/assets/home_body.png"
            />
          </div>
        </div>
        <div className="col-md-6 col-sm-12 mt-2">
          <p className="description">MS Club of SLIIT is a community group to support students in their quest of being a significant IT Professional.</p>
          <p className="description">We encourage a peer-to-peer learning environment to faciliate an organic growth of knowledge. Our members are volunteers who aim to provide value back to their community.</p>
        </div>
      </div>
    </div>
  </div>
);

export default WhatWeDoSection;
