import React from "react";
import moment from "moment";
import { ICard } from "../../interfaces/CardInterface";

const Card: React.FC<ICard> = ({
  title,
  type,
  author,
  imageUrl,
  tags,
  dateTime,
  link,
  description,
  socialMediaURLs,
  icon,
}) => (
  <div className="card-height">
    <div className="cell">
    <div className="card card-block mb-3">
    {type === 'BLOG' 
      ? <div className="card-blog">
          {imageUrl && <img src={imageUrl} className="card-img-top" alt="image" />}

          {icon && (
            <div className="d-flex justify-content-center mt-4">
              <i className={icon} />
            </div>
          )}
          <div className="card-body">
            {tags &&
              tags.length > 0 &&
              tags.slice(0, 2).map((tag, index) => (
                <span key={index} className="badge rounded-pill text-dark card-tag">
                  {tag.toUpperCase()}
                </span>
              ))}

            <div className="row">
              <h5 className="card-title">{title}</h5>
              {author && <p className="card-description">
                <span>
                  <span className="card-blog-emoji" />
                  <span className="mx-1 author-name">{author}</span>
                </span>  

                {dateTime && (
                  <div className="datetime">
                    <span className="card-calendar-emoji" />
                    <span className="card-datetime">
                      Published On {moment(dateTime).format("LL")}
                    </span>
                  </div>
                )}
              </p>}
            </div>

            {link && (
              <div className="row mt-3">
                <a
                  href={link}
                  target="_blank"
                  className="d-flex justify-content-center"
                >
                  <button className="btn card-btn button">READ MORE</button>
                </a>
              </div>
            )}
          </div>
        </div>
      :
        null
    }

    {type === 'EVENT'
      ?
        <div className="card-event">
          {imageUrl && <img src={imageUrl} className="card-img-top" alt="image" />}

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
                <div className="event-datetime d-flex justify-content-center">
                  <span className="card-event-calendar-emoji" />
                  <span className="card-datetime">
                    {moment(dateTime).format("LLL")}
                  </span>
                </div>
              </div>
            )}

            {link && (
              <div className="row mt-3">
                <a
                  href={link}
                  target="_blank"
                  className="d-flex justify-content-center"
                >
                  <button className="btn card-btn button">MORE INFO</button>
                </a>
              </div>
            )}
          </div>
        </div>
      : 
        null
    }

    {type === 'WEBINA' 
      ?
        <div className="card-webina">
          {imageUrl && <img src={imageUrl} className="card-img-top" alt="image" />}

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
                <div className="webina-datetime d-flex justify-content-center">
                  <span className="card-webina-calendar-emoji" />
                  <span className="card-datetime">
                    {moment(dateTime).format("LLL")}
                  </span>
                </div>
              </div>
            )}

            {link && (
              <div className="row mt-3">
                <a
                  href={link}
                  target="_blank"
                  className="d-flex justify-content-center"
                >
                  <button className="btn card-btn button">MORE INFO</button>
                </a>
              </div>
            )}
          </div>
        </div>
      :
        null 
    }

    {type === 'SPEAKER' 
      ? 
        <div className="card-speaker">
          {imageUrl && <img src={imageUrl} className="card-speaker-img" alt="image" />}

          <div className="card-body">
            <div className="row">
              <h5 className="card-title">{title}</h5>
              {description && <p className="card-description">{description}</p>}
            </div>

            <div className="d-flex justify-content-end">
              {socialMediaURLs && 
                (
                  <div className="social-media-section">
                    {socialMediaURLs.facebook && (
                      <a
                        href={socialMediaURLs.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-facebook speaker-social-icon" />
                      </a>
                    )}

                    {socialMediaURLs.instagram && (
                      <a
                        href={socialMediaURLs.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-instagram speaker-social-icon" />
                      </a>
                    )}

                    {socialMediaURLs.linkedIn && (
                      <a
                        href={socialMediaURLs.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-linkedin speaker-social-icon" />
                      </a>
                    )}

                    {socialMediaURLs.twitter && (
                      <a
                        href={socialMediaURLs.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-twitter speaker-social-icon" />
                      </a>
                    )}

                    {socialMediaURLs.web && (
                      <a
                        href={socialMediaURLs.web}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-globe-americas speaker-social-icon"></i>
                      </a>
                    )}
                  </div>
                )
              }
            </div>
          </div>
        </div>
      :
        null
    }
  </div>
    </div>
  </div>
);

export default Card;
