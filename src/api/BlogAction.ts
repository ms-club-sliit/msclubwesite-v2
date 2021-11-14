import axios from 'axios';
import { IBlog } from '../interfaces/BlogInterface';
import { GET_BLOGS_URL } from '../constants';

export const getBlogs = async () => {
  return await axios.get<IBlog>(GET_BLOGS_URL);
}