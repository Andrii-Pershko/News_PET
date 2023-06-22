import { useEffect, useState } from 'react';
import { getWeather } from 'service/weatherApi';

export const Weather = () => {
  const [location, setLocation] = useState({
    lat: '40.7142700',
    lon: '-74.0059700',
  });
  console.log('location', location);

  const succes = pos => {
    console.log('pos', pos);
    const { coords } = pos;

    setLocation({ lat: coords.latitude, lon: coords.longitude });
  };

  useEffect(() => {
    // navigator.geolocation.getCurrentPosition(succes);
    // getWeather(location);
  }, [location]);
  return <li>I weaher</li>;
};
