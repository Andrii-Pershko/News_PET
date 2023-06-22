import axios from 'axios';

axios.defaults.baseURL = 'https://api.nytimes.com';

const API_KEY = '7frkFokEDD61APsutDBpnd2meO7occ35';

export const getCategories = async date => {
  const categoryApi = await axios.get(
    `/svc/news/v3/content/section-list.json?api-key=${API_KEY}`
  );
  return categoryApi.data.results;
};

export const getTopNews = async categories => {
  console.log('categories', categories);
  const categ = categories === 'categories' ? 'home' : categories;
  console.log('categ', categ);
  const topNews = await axios.get(
    `/svc/topstories/v2/${categ}.json?&api-key=${API_KEY}`
  );
  return topNews;
};

// export const getNewsForDate = async ({month, day}) => {
//   const topNews = await axios.get(
//     `/svc/archive/v1/${year}/${month}.json?&api-key=${API_KEY}`
//   );
//   return topNews;
// };
