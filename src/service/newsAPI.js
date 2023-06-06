import axios from 'axios';

axios.defaults.baseURL = 'https://api.nytimes.com';

const API_KEY = '7frkFokEDD61APsutDBpnd2meO7occ35';

export const getCategories = async () => {
  try {
    const categoryApi = await axios.get(
      `/svc/news/v3/content/section-list.json?&api-key=${API_KEY}`
    );
    return categoryApi.data;
  } catch (e) {
    return e.response;
  }
};

export const getTopNews = async page => {
  try {
    const topNews = await axios.get(
      `/svc/topstories/v2/home.json?&api-key=${API_KEY}`
    );
    return topNews.data.results;
  } catch (e) {
    return e.response;
  }
};

console.log('first');
