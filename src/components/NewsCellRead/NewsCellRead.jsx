import { NewsCard } from 'components/NewsCard/NewsCard';
import { useState } from 'react';
import { formatDateNewsRead, formatingDataReadRender } from 'utils/utils';
import './NewsCellRead.css';

export const NewsCellRead = ({ date, alreadyReadlList }) => {
  const [isOpenDateBlock, setIsOpenDateBlock] = useState(false);

  return (
    <li className={`cell-news ${!isOpenDateBlock ? 'close' : ''}`}>
      <button
        type="button"
        onClick={() => setIsOpenDateBlock(!isOpenDateBlock)}
      >
        {formatingDataReadRender(date)}
      </button>

      <ul className={`news-list-home news-in-cell  `}>
        {alreadyReadlList
          .filter(news => formatDateNewsRead(news.pub_date) === date)
          .map(news => (
            <NewsCard news={news} notRead={false} />
          ))}
      </ul>
    </li>
  );
};
