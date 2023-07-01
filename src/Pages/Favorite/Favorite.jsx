import { NewsCard } from 'components/NewsCard/NewsCard';
import { useState } from 'react';

export const Favorite = () => {
  const [favoriteNews, setFavoriteNews] = useState(
    JSON.parse(localStorage.getItem('favoriteList'))
  );
  console.log('first', favoriteNews);

  const deleteFavoriteNews = (func, lengthArray) => {
    func(true);
    if (lengthArray === 0) {
      setTimeout(() => {
        setFavoriteNews(JSON.parse(localStorage.getItem('favoriteList')));
      }, 1000);
    }
  };

  if (favoriteNews.length === 0) {
    return <p>You have not added any news to favorites</p>;
  }
  return (
    <section className="news">
      <ul>
        {favoriteNews.map((news, index) => (
          <NewsCard
            key={index}
            news={news}
            deleteFavoriteNews={deleteFavoriteNews}
          />
        ))}
      </ul>
    </section>
  );
};
