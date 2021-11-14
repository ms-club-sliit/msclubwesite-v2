import React from "react";
import { ICardUpcoming } from "../../interfaces/CardUpcomingInterface";

const UpcomingCard: React.FC<ICardUpcoming> = ({ carouselTitle, item, rightSide }) => (
  <div>
    <h2 className="text-left">
      <strong>{carouselTitle}</strong>
    </h2>
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
            src={item.imageUrl}
          />
        </div>
        <div className="col-lg-7 col-md-12 col-sm-12 p-5">
          <h2>
            <strong>{item.title}</strong>
          </h2>
          <p className="lead mt-3">{item.description}</p>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <button type="button" className="btn btn-success btn-pill mt-3">
              More Info
            </button>
          </a>
        </div>

        {rightSide ? (
          <div className="col-lg-5 col-md-12 col-sm-12 d-none d-xl-block">
            <img
              alt="imageFlatVector"
              className="img-fluid"
              src={item.imageUrl}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  </div>
);

export default UpcomingCard;
