import { useEffect, useState } from 'react';
import './NewsCard.css';
import { formatDateForPublishDate, formatText, formatTitle } from 'utils/utils';

export const NewsCard = ({ news, deleteFavoriteNews, notRead }) => {
  const {
    title,
    abstract,
    section,
    published_date,
    multimedia,
    web_url,
    _id,
    headline,
    pub_date,
    news_desk,
    currentUserDeviceShowNews,
  } = news;
  
  const [deleteAnimation, setDeleteAnimation] = useState(false);
  const [inFavorite, setInFavorite] = useState(false);
  const [isRead, setIsRead] = useState(
    JSON.parse(localStorage.getItem('favoriteList')).some(
      news => news._id === _id
    )
  );

  useEffect(() => {
    const favoriteListParse = JSON.parse(localStorage.getItem('favoriteList'));

    if (favoriteListParse.length === 0) {
      return;
    } else {
      setInFavorite(favoriteListParse.some(news => news._id === _id));
    }
  }, [_id, inFavorite]);

  const handleAddToFavorite = () => {
    const favoriteList = JSON.parse(localStorage.getItem('favoriteList'));
    if (!inFavorite) {
      favoriteList.push(news);
      localStorage.setItem('favoriteList', JSON.stringify(favoriteList));
      setInFavorite(!inFavorite);
      return;
    }
    const filteredListNews = favoriteList.filter(news => news._id !== _id);
    localStorage.setItem('favoriteList', JSON.stringify(filteredListNews));
    setInFavorite(!inFavorite);

    if (deleteFavoriteNews !== undefined) {
      deleteFavoriteNews(setDeleteAnimation, filteredListNews.length);
    }
  };

  const handleReadingNews = () => {
    const alreadyRead = JSON.parse(localStorage.getItem('alreadyRead'));
    const checkAlreadyRead = alreadyRead.filter(
      newsRead => newsRead._id === news._id
    );

    if (checkAlreadyRead.length === 0) {
      alreadyRead.push(news);
      localStorage.setItem('alreadyRead', JSON.stringify(alreadyRead));
      setIsRead(true);
    }
  };

  if (headline === undefined && title === '') {
    return;
  }
  return (
    <li
      className={`news-card ${
        notRead === undefined ? (isRead ? 'already-to-read' : '') : ''
      } ${deleteAnimation ? 'delete-favorite' : ''}`}
    >
      <p className="news_section">{section || news_desk}</p>
      <button
        onClick={handleAddToFavorite}
        type="button"
        className={`add-to-favorite ${inFavorite ? 'in-favorite' : ''}`}
      >
        <span className="add-animation">
          <span className="content">
            Add to favorite &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Remove from
            favorite
          </span>
        </span>
      </button>
      <img
        src={
          multimedia.length === 0
            ? `https://www.indiablooms.com/life_pic/2016/news-1471859267.jpg`
            : multimedia[2].url.slice(0, 5) === `https`
            ? multimedia[2].url
            : `https://static01.nyt.com/${multimedia[2].url}`
        }
        alt=""
      />
      <h3>{formatTitle(title || headline.main)}</h3>
      <p className="news-abstract-text">{formatText(abstract)}</p>
      <div className="help-thumb">
        <p>
          {formatDateForPublishDate(
            published_date || pub_date,
            currentUserDeviceShowNews
          )}
        </p>
        <a
          className="to-original-post"
          onClick={handleReadingNews}
          href={web_url}
          target="_blank"
          rel="noreferrer"
        >
          read more
        </a>
      </div>
    </li>
  );
};
