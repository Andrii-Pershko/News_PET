import axios from 'axios';

const axiosNews = axios.create({
  baseURL: 'https://api.nytimes.com',
});

const API_KEY = '7frkFokEDD61APsutDBpnd2meO7occ35';

export const getCategories = async () => {
  const categoryApi = await axiosNews.get(
    `/svc/news/v3/content/section-list.json?api-key=${API_KEY}`
  );
  return categoryApi.data.results;
};

export const getNews = async (query, currentPage, date) => {
  const dateFormating = () => {
    const dateFormat = date.split('/');
    return `${dateFormat[2]}${dateFormat[1]}${dateFormat[0]}`;
  };
  const getNews = await axiosNews.get(
    `/svc/search/v2/articlesearch.json?begin_date=${dateFormating()}&end_date=${dateFormating()}&q=${query}&page=${currentPage}&api-key=${API_KEY}`
  );
  return getNews.data.response;
};
