import React from "react";
import { ICardCarousel } from "../../interfaces/CardCarouselInterface";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Card } from "..";

const responsive = {
  0: {
    items: 1.3,
  },
  370: {
    items: 1.2,
  },
  411: {
    items: 1.3,
  },
  414: {
    items: 1.3,
  },
  600: {
    items: 2,
  },
  768: {
    items: 2.25,
  },
  1000: {
    items: 3,
  },
  1200: {
    items: 3,
  },
  1400: {
    items: 3.3,
  },
  1700: {
    items: 4.5,
  },
  2000: {
    items: 5,
  },
};
let slider: any;
const slideNext = () => {
  slider.next(500);
};
const slidePrev = () => {
  slider.prev(500);
};
const slidePrevKeyBoard = (e: any) => {
  if (e.keyCode === 37) {
    slidePrev();
  }
};
const slideNextKeyBoard = (e: any) => {
  if (e.keyCode === 39) {
    slideNext();
  }
};

const CardCarousel: React.FC<ICardCarousel> = ({
  carouselTitle,
  items,
  blogItems,
}) => (
  <div className="past-event-container">
    <h1 className="event-header">{carouselTitle}</h1>
    <div className="nav-button-wrapper">
      <div className="view-more">View More</div>
      <div
        onClick={slidePrev}
        onKeyDown={slidePrevKeyBoard}
        role="button"
        tabIndex={0}
      >
        <i className="far fa-arrow-alt-circle-left fa-lg nav-icon" />
      </div>
      &nbsp;&nbsp;&nbsp;
      <div
        onClick={slideNext}
        onKeyDown={slideNextKeyBoard}
        role="button"
        tabIndex={0}
      >
        <i className="far fa-arrow-alt-circle-right fa-lg nav-icon" />
      </div>
    </div>

    <div className="container-fluid">
      <OwlCarousel
        className="owl-theme"
        dots={false}
        loop
        margin={70}
        responsive={responsive}
        ref={(slide) => {
          slider = slide;
        }}
      >
        {items && items.map((item) => (
          <Card
            id={item.id}
            imageUrl={item.imageUrl}
            title={item.title}
            description={item.description}
            dateTime={item.dateTime}
            tags={item.tags}
            link={item.link}
            socialMediaURLs={item.socialMediaURLs}
          />
        ))}

        {blogItems && blogItems.map((item, index) => (
          <Card
            id={index}
            imageUrl={item.thumbnail}
            title={item.title}
            dateTime={item.pubDate}
            tags={item.categories}
            link={item.link}
          />
        ))}
      </OwlCarousel>
    </div>
  </div>
);

export default CardCarousel;
