import axios from "axios";
import { IEvent } from "../interfaces/EventInterface";
import { GET_PASTEVENT_URL } from "../constants";

export const getPastEvents = async () => {
  return await axios.get<IEvent[]>(GET_PASTEVENT_URL);
};
