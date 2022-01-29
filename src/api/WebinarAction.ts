import axios from "axios";
import { IWebinar } from "../interfaces/IWebinar";
import {GET_WEBINAR_URL} from "../constants"

export const getWebinars =  async () => {
    return await axios.get<IWebinar>(GET_WEBINAR_URL);
}
