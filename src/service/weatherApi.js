import axios from 'axios';

const axiosWeather = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

const API_KEY = 'f6d3472b2575964087b1fa8a43b3a6d8';

export const getWeather = async ({ lon, lat }) => {
  const categoryApi = await axiosWeather.get(
    `weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`,
    {}
  );
  return categoryApi;
};
