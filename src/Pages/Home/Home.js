import { getCategories, getTopNews } from 'service/newsAPI';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [isLoading, setIsloading] = useState(false);
  const [news, setNews] = useState([]);
  const [error, setError] = useState(false);
  const [categories, setCategories] = useState([]);
  console.log('news', news);
  console.log('categories', categories);

  useEffect(() => {
    getCategories().then(res => {
      if (res.status !== 'OK') {
        setError(!error);
      }
      setCategories(res);
    });

    getTopNews().then(res => {
      setIsloading(true);
      setNews(res);
    });
  }, [error]);

  if (!isLoading) {
    return <h2>Page loading, please wait...</h2>;
  }

  if (error) {
    return <h2>Error, rlease reload page</h2>;
  }
  return (
    <>
      <h1>Home</h1>
    </>
  );
};
