import React from "react";

const WhatWeDoSection: React.FC = () => (
  <div>
    <h2 className="text-center what-we-do-header">
      <strong>Who Are We?</strong>
    </h2>
    <div className="container">
      <div className="row mt-5 mb-5">
        <div className="col-md-6 col-sm-12">
          <p className="lead">MS Club of SLIIT is a community group to support students in their quest of being a significant IT Professional.</p>
          <p className="lead">We encourage a peer-to-peer learning environment to faciliate an organic growth of knowledge. Our members are volunteers who aim to provide value back to their community.</p>
        </div>
        <div className="col-md-6 col-sm-12 d-flex justify-content-center">
          <img
            alt="imageFlatVector"
            className="img-fluid d-none d-md-block"
            src="/assets/home_body.png"
          />
        </div>
      </div>
    </div>
  </div>
);

export default WhatWeDoSection;
