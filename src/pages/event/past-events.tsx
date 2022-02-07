import React, { useEffect, useState } from 'react';
import Slider from "react-owl-carousel";
import { getEvents } from '../../api/EventAction';
import { IEvent } from '../../interfaces/EventInterface';
import { CARD_TYPE_EVENT, SLIDER_RESPONSIVE_BREAKPOINTS } from '../../constants';
import { Card } from '../../components';
import { translation } from '../../locales/en-US/translation.json';

const PastEvents: React.FC = () => {
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

  const [eventList, setEventList] = useState<IEvent[]>();

  //fetch all event 
  useEffect(() => {
    getEvents()
      .then((response) => {
        if (response.data) {
          setEventList(response.data)
          //console.log(response.data)
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div className="container mt-3">
      <h2 className="item-header">{translation.label["event-past-events-title"]}</h2>
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

      {eventList && eventList.length > 0 &&
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
            {eventList.map((event, index) => (
              <Card
                key={index}
                id={index}
                title={event.title}
                dateTime={event.dateTime.toString()}
                description={event.description}
                imageUrl={event.imageUrl}
                link={event.link}
                tags={event.tags}
                type={CARD_TYPE_EVENT}
              />
            ))}
          </Slider>
        )}
    </div>
  );
};

export default PastEvents;