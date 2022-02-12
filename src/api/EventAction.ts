import axios from "axios";
import { IEvent } from "../interfaces/EventInterface";
import { GET_EVENT_URL, GET_PASTEVENT_URL } from "../constants";

export const getEvents = async () => {
  return await axios.get<IEvent[]>(GET_EVENT_URL);
};

export const getPastEvents = async () => {
  return await axios.get<IEvent[]>(GET_PASTEVENT_URL);
};
