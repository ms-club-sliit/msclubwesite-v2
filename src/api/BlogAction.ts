import axios from 'axios';
import { IBlog } from '../interfaces/BlogInterface';
import { GET_BLOGS_URL } from '../constants';

const blogApi = {
  blog() {
    return {
      getAllblogs: async () =>
        await axios.get<IBlog>('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/ms-club-of-sliit'),
    };
  },
};

export default blogApi;