import axios from 'axios';
import { IBlog } from '../interfaces/BlogInterface';
import { GET_BLOGS_URL } from '../constants';

const blogApi = {
  blog() {
    return {
      getAllblogs: async () =>
        await axios.get<IBlog>(GET_BLOGS_URL),
    };
  },
};

export default blogApi;