import React from "react";
import { ICardScreen } from "../../interfaces/CardScreenInterface";

const CardScreen: React.FC<ICardScreen> = ({
  title,
  description,
  imageUrl,
  rightSide
}) => (
  <div>
    <div className="mt-5 mb-5">
      <div className="row">
        <div
          className={`col-lg-5 col-md-12 col-sm-12 ${
            rightSide ? "d-xl-none " : ""
          }`}
        >
          <img
            alt="imageFlatVector"
            className="img-fluid"
            src={imageUrl}
          />
        </div>
        <div className="col-lg-7 col-md-12 col-sm-12 p-5">
          <h2>
            <strong>{title}</strong>
          </h2>
          <p className="lead mt-3">{description}</p>
        </div>

        {rightSide ? (
          <div className="col-lg-5 col-md-12 col-sm-12 d-none d-xl-block">
            <img
              alt="imageFlatVector"
              className="img-fluid"
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
