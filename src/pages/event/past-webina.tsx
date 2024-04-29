import React, { useEffect, useState } from "react";
import { Card, NoContent } from "../../components";
import {
  CARD_TYPE_WEBINA,
  SLIDER_RESPONSIVE_BREAKPOINTS,
} from "../../constants";
import Slider from "react-owl-carousel";
import ts from "../../locales/en-US/translation.json";
import { IWebinar } from "../../interfaces/WebinarInterface";
import { getWebinars } from "../../api/WebinarAction";

let translation = ts.translation;

const PastWebinars: React.FC = () => {
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

  const [webinarList, setWebinarList] = useState<IWebinar[]>();

  //fetch all webinar items
  useEffect(() => {
    getWebinars()
      .then((response) => {
        if (response.data) {
          setWebinarList(response.data);
          // setWebinarList(response.data);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="item-header">
        {translation.label["event-past-webinars-title"]}
      </h2>
      {webinarList && webinarList.length > 0 ? (
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
            {webinarList.map((event, index) => (
              <Card
                key={index}
                id={index}
                title={event.title}
                dateTime={event.dateTime.toString()}
                description={event.description}
                imageUrl={event.imageUrl}
                link={event.link}
                tags={event.tags}
                type={CARD_TYPE_WEBINA}
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

export default PastWebinars;
