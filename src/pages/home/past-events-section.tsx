import React, { useEffect, useState } from "react";
import Slider from "react-owl-carousel";
import { getPastEvents } from "../../api/EventAction";
import { IEvent } from "../../interfaces/EventInterface";
import { ToastContainer, toast } from "react-toastify";
import {
  CARD_TYPE_EVENT,
  SLIDER_RESPONSIVE_BREAKPOINTS,
} from "../../constants";
import { Card, NoContent } from "../../components";
import ts from "../../locales/en-US/translation.json";

let translation = ts.translation;

const PastEventSection: React.FC = () => {
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

  const [eventList, setEventList] = useState<IEvent[]>();
  //fetch all pastevent
  useEffect(() => {
    getPastEvents()
      .then((response) => {
        if (response.data) {
          setEventList(response.data);
        }
      })
      .catch((error) => {
        toastNotification("Something went wrong", "error");
      });
  },[]);

  const toastNotification = (message: string, status: string) => {
    if (status === "success") {
      toast.success(message, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (status === "error") {
      toast.error(message, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.info(message, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <div className="container">
      <ToastContainer />
      <h2 className="item-header">
        {translation.label["home-past-events-title"]}
      </h2>
      {eventList && eventList.length > 0 ? (
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
        </>
      ) : (
        <NoContent />
      )}
    </div>
  );
};

export default PastEventSection;
