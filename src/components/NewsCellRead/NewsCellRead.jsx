import { NewsCard } from 'components/NewsCard/NewsCard';
import { useState } from 'react';
import { formatDateNewsRead } from 'utils/utils';
import './NewsCellRead.css';

export const NewsCellRead = ({ date, alreadyReadlList }) => {
  console.log('date', date);
  const [isOpenDateBlock, setIsOpenDateBlock] = useState(false);

  const formatingDataReadRender = date => {
    const dateFormating = date.split('/');
    return `${dateFormating[2]}/${dateFormating[1]}/${dateFormating[0]}`;
  };

  return (
    <li className={`cell-news ${!isOpenDateBlock ? 'close' : ''}`}>
      <button
        type="button"
        onClick={() => setIsOpenDateBlock(!isOpenDateBlock)}
      >
        {formatingDataReadRender(date)}
      </button>

      <ul className={`news-in-cell `}>
        {alreadyReadlList
          .filter(news => formatDateNewsRead(news.pub_date) === date)
          .map(news => (
            <NewsCard news={news} notRead={false} />
          ))}
      </ul>
    </li>
  );
};
