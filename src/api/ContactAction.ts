import axios from "axios";
import { SEND_MESSAGE_URL } from "../constants";

export const sendMessage = async (newMessage: any) => {
  return await axios.post(SEND_MESSAGE_URL, newMessage);
};
