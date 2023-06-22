import { useState } from 'react';
import './NewsCard.css';

export const NewsCard = ({ news }) => {
  const {
    title,
    abstract,
    section,
    published_date,
    multimedia,
    url,
    short_url,
  } = news;

  const [inFavorite, setInFavorite] = useState(() => {
    const favoriteList = localStorage.getItem('favoriteList');
    const favoriteListParse = JSON.parse(favoriteList);

    if (favoriteListParse.length === 0) {
      return false;
    }
    return favoriteListParse.some(news => news.short_url === short_url);
  });

  const [isRead, setIsRead] = useState(() => {
    const readingList = localStorage.getItem('alreadyRead');
    const freadingListParse = JSON.parse(readingList);

    if (freadingListParse.length === 0) {
      return false;
    }
    return freadingListParse.some(news => news.short_url === short_url);
  });

  const formatDate = date => {
    return date.slice(0, 10).replace(/-/g, '/');
  };

  const formatText = text => {
    if (text.length > 90) {
      return `${text.slice(0, 90)}...`;
    }
    return text;
  };
  const formatTitle = title => {
    if (title.length > 50) {
      return `${title.slice(0, 55)}...`;
    }
    return title;
  };

  const handleAddToFavorite = () => {
    const favoriteList = JSON.parse(localStorage.getItem('favoriteList'));
    if (!inFavorite) {
      favoriteList.push(news);
      localStorage.setItem('favoriteList', JSON.stringify(favoriteList));
      setInFavorite(!inFavorite);
      return;
    }
    const filteredListNews = favoriteList.filter(
      news => news.short_url !== short_url
    );
    localStorage.setItem('favoriteList', JSON.stringify(filteredListNews));
    setInFavorite(!inFavorite);
  };

  const handleReadingNews = () => {
    const alreadyRead = JSON.parse(localStorage.getItem('alreadyRead'));
    alreadyRead.push(news);

    localStorage.setItem('alreadyRead', JSON.stringify(alreadyRead));
    setIsRead(!isRead);
  };

  return (
    <li className={`news-card ${isRead ? 'already-to-read' : ''}`}>
      <p className="news_section">{section}</p>
      <button
        onClick={handleAddToFavorite}
        type="button"
        className={`add-to-favorite ${inFavorite ? 'in-favorite' : ''}`}
      >
        Add to favorite
      </button>
      <img src={multimedia[0].url} alt="" />
      <h3>{formatTitle(title)}</h3>
      <p className="news-abstract-text">{formatText(abstract)}</p>
      <div className="help-thumb">
        <p>{formatDate(published_date)}</p>
        <a
          className="to-original-post"
          onClick={handleReadingNews}
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          read more
        </a>
      </div>
    </li>
  );
};
