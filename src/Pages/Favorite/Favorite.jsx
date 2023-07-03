import { NewsCard } from 'components/NewsCard/NewsCard';
import { useState } from 'react';
import './Favorite.css';

export const Favorite = () => {
  const [favoriteNews, setFavoriteNews] = useState(
    JSON.parse(localStorage.getItem('favoriteList'))
  );

  const deleteFavoriteNews = (func, lengthArray) => {
    func(true);
    if (lengthArray === 0) {
      setTimeout(() => {
        setFavoriteNews(JSON.parse(localStorage.getItem('favoriteList')));
      }, 1000);
    }
  };

  if (favoriteNews.length === 0) {
    return (
      <section className="news">
        <p className="no-favorite-news">
          You have not added any news to favorites.
        </p>
      </section>
    );
  }
  return (
    <section className="news">
      <ul className="news-list-home">
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
