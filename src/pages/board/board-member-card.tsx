import React from "react";
import { IBoardMemberDetails } from "../../interfaces/BoardInterface";

const BoardMemberCard: React.FC<IBoardMemberDetails> = ({
  image,
  name,
  position,
  socialmedia,
}) => {
  const navigateToLinkedIn = (e: any) => {
    e.preventDefault();
    if (socialmedia) {
      window.open(socialmedia.linkedin, '_blank');
    }
  }
  
  return (
    <div className="card board-member">
      {image && <img src={image} className="profile-picture" alt="image" />}

      <div className="card-body">
        <div className="row">
          <h5 className="name" onClick={e => navigateToLinkedIn(e)}>{name} <span className="link"/></h5>
          {position && 
            (
              <span style={{ paddingLeft: '0px'}}>
                <p className="position">{position}</p>
                <div className="d-flex justify-content-end">
                  <span>
                    {socialmedia.facebook && (
                      <a
                        href={socialmedia.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-facebook social-icon" />
                      </a>
                    )}

                    {socialmedia.instagram && (
                      <a
                        href={socialmedia.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-instagram social-icon" />
                      </a>
                    )}

                    {socialmedia.linkedin && (
                      <a
                        href={socialmedia.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-linkedin social-icon" />
                      </a>
                    )}

                    {socialmedia.twitter && (
                      <a
                        href={socialmedia.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-twitter social-icon" />
                      </a>
                    )}
                  </span>
                </div>
              </span>
            )
          }
        </div>
      </div>
  </div>
  );
};

export default BoardMemberCard;
