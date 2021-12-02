import axios from "axios";
import { SUBMIT_APPLICATION_URL } from "../constants";

export const submitApplication = async (newApplication: any) => {
  return await axios.post(SUBMIT_APPLICATION_URL, newApplication);
};
  