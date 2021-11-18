import React from "react";
import { ICardScreen } from "../../interfaces/CardScreenInterface";

const CardScreen: React.FC<ICardScreen> = ({
  title,
  description,
  imageUrl,
  rightSide,
  emoji
}) => (
  <div>
    <div className="mt-5 mb-5">
      <div className="row">
        <div
          className={`col-lg-5 col-md-12 col-sm-12 ${
            rightSide ? "d-xl-none " : ""
          }`}
        >
          <div className="d-flex justify-content-center">
            <img
              alt="about-us-image"
              className="img-fluid about-us-card-img"
              src={imageUrl}
            />
          </div>
        </div>
        <div className="col-lg-7 col-md-12 col-sm-12 p-5">
          <h2 className="about-us-title">
            <strong>{title}</strong>
            <span className={emoji} />
          </h2>
          <p className="about-us-description mt-3">{description}</p>
        </div>

        {rightSide ? (
          <div className="col-lg-5 col-md-12 col-sm-12 d-none d-xl-block">
            <img
              alt="about-us-image"
              className="img-fluid about-us-card-img"
              src={imageUrl}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  </div>
);

export default CardScreen;
