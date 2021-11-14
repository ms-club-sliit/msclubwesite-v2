import React from "react";
import { IBoardMemberDetails } from "../../interfaces/BoardInterface";

const BoardMemberCard: React.FC<IBoardMemberDetails> = ({
  image,
  name,
  position,
  socialmedia,
}) => (
  <div>
    <div className="row-md-3">
      <div className="card-box text-center">
        <div className="user-pic">
          <img src={image} className="img-fluid" alt="User Pic" />
        </div>
        <h4>{name}</h4>
        <h6>{position}</h6>
        <hr />
        <div className="d-flex justify-content-center">
          {socialmedia.facebook && (
            <a
              href={socialmedia.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook fa-lg p-1" />
            </a>
          )}
          {socialmedia.linkedin && (
            <a
              href={socialmedia.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin  fa-lg p-1" />
            </a>
          )}
          {socialmedia.twitter && (
            <a
              href={socialmedia.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter fa-lg p-1" />
            </a>
          )}
          {socialmedia.instagram && (
            <a
              href={socialmedia.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram fa-lg p-1" />
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default BoardMemberCard;
