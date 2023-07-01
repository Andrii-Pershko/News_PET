import { useEffect, useState } from 'react';
import { getWeather } from 'service/weatherApi';
import './Weather.css';

export const Weather = () => {
  const [location, setLocation] = useState(false);
  const [weatherData, setWeatherData] = useState(false);
  const date = new Date().toString().split(' ');

  const succes = pos => {
    const { latitude, longitude } = pos.coords;
    setLocation({ lat: latitude, lon: longitude });
  };
  const error = () => {
    setLocation({
      lat: '40.7142700',
      lon: '-74.0059700',
    });
  };

  useEffect(() => {
    if (!location) {
      navigator.geolocation.getCurrentPosition(succes, error);
    }
    if (location) getWeather(location).then(res => setWeatherData(res.data));
  }, [location]);

  return (
    <li className="weather">
      {!weatherData ? (
        <p>Loading weather</p>
      ) : (
        <>
          <div className="city-data">
            <p className="temperature">{Math.round(weatherData.main.temp)}°</p>
            <div className="city-and-status">
              <p className="weather-status">
                {weatherData.weather[0].description}
              </p>
              <p className="city-name">{weatherData.name}</p>
            </div>
          </div>
          <img
            className="icon-weather"
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt=""
          />
          <p>{date[0]}</p>
          <p>
            {date[2]} {date[1]} {date[3]}
          </p>
        </>
      )}
    </li>
  );
};
