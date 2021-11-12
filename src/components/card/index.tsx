import React from 'react';
import moment from 'moment';
import { ICard } from '../../interfaces/CardInterface';

const Card: React.FC<ICard> = ({ title, imageUrl, tags, dateTime, link, description }) => (
  <div className="card mb-3">
    <img src={imageUrl} className="card-img-top" alt="image" />

    <div className="card-body">
      {tags && tags.length > 0 && tags.slice(0, 3).map((tag, index) => (
        <span key={index} className="badge rounded-pill text-dark card-tag">
          {tag.toUpperCase()}
        </span>
      ))}

      <div className="row">
        <h5 className="card-title">{title}</h5>
        {description && <p className="card-description">{description}</p>}
      </div>

      <div className="row">
        <div className="d-flex justify-content-center">
          <i className="fas fa-calendar-alt fa-lg mt-1" />
          <span className="card-datetime">{moment(dateTime).format('lll')}</span>
        </div>
      </div>

      <div className="row mt-3">
        <a href={link} target="_blank" className="d-flex justify-content-center">
          <button className="btn card-btn">MORE INFO</button>
        </a>
      </div>
    </div>
  </div>
);

export default Card;