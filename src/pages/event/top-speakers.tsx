import React, { useEffect, useState } from "react";
import { Card, NoContent } from "../../components";
import {
  CARD_TYPE_SPEAKER,
  SLIDER_RESPONSIVE_BREAKPOINTS,
} from "../../constants";
import Slider from "react-owl-carousel";
// import speakers from '../../data/TopSpeakersData.json';
import ts from "../../locales/en-US/translation.json";

import { getTopSpeakers } from "../../api/TopSpeakerAction";
import { ITopSpeaker } from "../../interfaces/TopSpeakerInterface";

let translation = ts.translation;

const TopSpeakers: React.FC = () => {
  let slider: any;
  let keyboardCode: number;

  const slideNext = () => {
    slider.next(500);
  };

  const slidePrev = () => {
    slider.prev(500);
  };

  const slideNextKeyBoard = (event: any) => {
    keyboardCode = event.keyCode;

    if (keyboardCode === 39) {
      slideNext();
    }
  };

  const slidePrevKeyBoard = (event: any) => {
    keyboardCode = event.keyCode;

    if (keyboardCode === 37) {
      slidePrev();
    }
  };

  const [topSpeakers, setTopSpeakers] = useState<ITopSpeaker[]>();

  useEffect(() => {
    getTopSpeakers()
      .then((response) => {
        setTopSpeakers(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div className="container mt-3">
      <h2 className="item-header">
        {translation.label["event-top-speakers-title"]}
      </h2>
      {topSpeakers && topSpeakers.length > 0 ? (
        <>
          <div className="item-navigation">
            <div className="view-more-text">
              {translation.label["view-more"]}
            </div>
            <div
              onClick={slidePrev}
              onKeyDown={slidePrevKeyBoard}
              role="button"
              tabIndex={0}
              className="mr-2"
            >
              <i className="far fa-arrow-alt-circle-left fa-lg nav-icon" />
            </div>
            &nbsp;
            <div
              onClick={slideNext}
              onKeyDown={slideNextKeyBoard}
              role="button"
              tabIndex={0}
            >
              <i className="far fa-arrow-alt-circle-right fa-lg nav-icon" />
            </div>
          </div>
          <Slider
            className="owl-theme"
            dots={false}
            loop={true}
            margin={70}
            responsive={SLIDER_RESPONSIVE_BREAKPOINTS}
            ref={(slide) => {
              slider = slide;
            }}
          >
            {topSpeakers.map((speaker, index) => (
              <Card
                key={index}
                id={index}
                title={speaker.title}
                description={speaker.description}
                socialMediaURLs={speaker.socialMediaURLs}
                imageUrl={speaker.imageUrl}
                type={CARD_TYPE_SPEAKER}
              />
            ))}
          </Slider>
        </>
      ) : (
        <NoContent />
      )}
    </div>
  );
};

export default TopSpeakers;
