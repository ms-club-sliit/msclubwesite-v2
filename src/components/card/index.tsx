import React from "react";
import moment from "moment";
import { ICard } from "../../interfaces/CardInterface";

const Card: React.FC<ICard> = ({
  title,
  imageUrl,
  tags,
  dateTime,
  link,
  description,
  socialMediaURLs,
  icon,
}) => (
  <div className="card mb-3">
    {imageUrl && <img src={imageUrl} className="card-img-top" alt={title}/>}

    {icon && (
      <div className="d-flex justify-content-center mt-4">
        <i className={icon} />
      </div>
    )}
    <div className="card-body">
      {tags &&
        tags.length > 0 &&
        tags.slice(0, 3).map((tag, index) => (
          <span key={index} className="badge rounded-pill text-dark card-tag">
            {tag.toUpperCase()}
          </span>
        ))}

      <div className="row">
        <h5 className="card-title">{title}</h5>
        {description && <p className="card-description">{description}</p>}
      </div>

      {dateTime && (
        <div className="row">
          <div className="d-flex justify-content-center">
            <i className="fas fa-calendar-alt fa-lg mt-1" />
            <span className="card-datetime">
              {moment(dateTime).format("lll")}
            </span>
          </div>
        </div>
      )}

      {/* Social Media Section */}
      {socialMediaURLs && (
        <div className="d-flex justify-content-center">
          <a
            href={socialMediaURLs?.fb}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook fa-lg p-1" />
          </a>

          <a
            href={socialMediaURLs?.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram fa-lg p-1" />
          </a>

          <a
            href={socialMediaURLs?.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter fa-lg p-1" />
          </a>

          <a
            href={socialMediaURLs?.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin fa-lg p-1" />
          </a>

          <a
            href={socialMediaURLs?.web}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-globe fa-lg p-1" />
          </a>
        </div>
      )}

      {link && (
        <div className="row mt-3">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="d-flex justify-content-center"
          >
            <button className="btn card-btn">MORE INFO</button>
          </a>
        </div>
      )}
    </div>
  </div>
);

export default Card;
