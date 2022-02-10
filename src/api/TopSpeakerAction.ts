import axios from "axios";
import { TOP_SPEAKER_URL } from "../constants/index";
import { ITopSpeaker } from "../interfaces/TopSpeakerInterface";

export const getTopSpeakers = async () => {
  return await axios.get<ITopSpeaker[]>(TOP_SPEAKER_URL);
};
