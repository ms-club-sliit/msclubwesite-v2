import axios from "axios";
import { IEvent } from "../interfaces/EventInterface";
import { GET_EVENT_URL } from "../constants"

export const getEvents = async () => {
    return await axios.get<IEvent[]>(GET_EVENT_URL);
}
