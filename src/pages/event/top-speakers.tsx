import React from 'react';
import { Card } from '../../components';
import { CARD_TYPE_SPEAKER, SLIDER_RESPONSIVE_BREAKPOINTS } from '../../constants';
import Slider from 'react-owl-carousel';
import speakers from '../../data/TopSpeakersData.json';
import {translation} from '../../locales/en-US/translation.json';

const TopSpeakers: React.FC = () => {
  let slider: any;
  let keyboardCode: number;

  const slideNext = () => {
    slider.next(500);
  }

  const slidePrev = () => {
    slider.prev(500);
  }

  const slideNextKeyBoard = (event: any) => {
    keyboardCode = event.keyCode;

    if (keyboardCode === 39) {
      slideNext();
    }
  }

  const slidePrevKeyBoard = (event: any) => {
    keyboardCode = event.keyCode;

    if (keyboardCode === 37) {
      slidePrev();
    }
  }

  return (
    <div className="container mt-3">
      <h2 className="item-header">{translation.label["event-top-speakers-title"]}</h2>
      <div className="item-navigation">
        <div className="view-more-text">{translation.label["view-more"]}</div>
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

      {speakers && speakers.data.length > 0 && 
      (
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
          {speakers.data.map((speaker, index) => (
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
      )}
    </div>
  );
}

export default TopSpeakers;