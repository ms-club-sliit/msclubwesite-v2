import axios from "axios";
import { IWebinar } from "../interfaces/WebinarInterface";
import {GET_WEBINAR_URL , GET_PASTWEBINAR_URL} from "../constants"

export const getWebinars =  async () => {
    return await axios.get<IWebinar[]>(GET_WEBINAR_URL);
}

export const getPastWebinars = async () => {
    return await axios.get<IWebinar[]>(GET_PASTWEBINAR_URL);
}
