import React, { useEffect, useRef, useState } from "react";
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
  
  const profile_image = useRef<HTMLImageElement>(null);
  const [showProfileImage, setShowProfileImage] = useState(false);

  useEffect(() => {
    let image = profile_image.current;
    if(image){
      let loaded = image.complete && image.naturalHeight !== 0;
      setShowProfileImage(loaded);
    
      image.onload = () => {
        setShowProfileImage(true);
      }
    }
  }, [image]);

  return (
    <div className="card board-member">
      <img ref={profile_image} src={image} className={`profile-picture ${showProfileImage ? "" : "d-none"}`} alt="member-profile" />
      <div className={`profile-picture animated-background-profile ${!showProfileImage ? "" : "d-none"}`} style={{ backgroundColor: "#fff"}} />

      <div className="card-body">
        <div className="row">
          <h5 className="name" onClick={e => navigateToLinkedIn(e)}>{name} <span className="link"/></h5>
          {position && 
            (
              <span style={{ paddingLeft: '0px'}}>
                <p className="position">{position}</p>
                <div className="d-flex justify-content-end">
                  <span>
                  {socialmedia.mlsa && (
                      <a
                        href={socialmedia.mlsa}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                         <img src="/assets/mlsa_logo.png" className="img-fluid" width="22px" alt="MLSA Logo" style={{"verticalAlign": "sub"}}/>
                      </a>
                    )}

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
