export const GET_BLOGS_URL = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/ms-club-of-sliit';
export const SEND_MESSAGE_URL = `${process.env.REACT_APP_BACKEND_URL}/contact/`;
export const SUBMIT_APPLICATION_URL = `${process.env.REACT_APP_BACKEND_URL}/application/`;
export const GET_WEBINAR_URL = `${process.env.REACT_APP_BACKEND_URL}/webinar`;
export const GET_EVENT_URL = `${process.env.REACT_APP_BACKEND_URL}/event/`;
export const TOP_SPEAKER_URL = `${process.env.REACT_APP_BACKEND_URL}/topspeaker/`;
export const CARD_TYPE_BLOG = 'BLOG';
export const CARD_TYPE_SPEAKER = 'SPEAKER';
export const CARD_TYPE_EVENT = 'EVENT';
export const CARD_TYPE_WEBINA = 'WEBINA';
export const SLIDER_RESPONSIVE_BREAKPOINTS = {
  0: {
    items: 1,
  },
  368: {
    items: 1.35,
  },
  456: {
    items: 1.4,
  },
  600: {
    items: 1.6,
  },
  768: {
    items: 2.2,
  },
  1000: {
    items: 2.8,
  },
  1200: {
    items: 3.4,
  },
  1400: {
    items: 3.3,
  },
  1700: {
    items: 4.4,
  },
  2000: {
    items: 5,
  },
}