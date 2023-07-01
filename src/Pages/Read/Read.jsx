import { NewsCellRead } from 'components/NewsCellRead/NewsCellRead';

import { formatDateNewsRead } from 'utils/utils';

export const Read = () => {
  const alreadyReadlList = JSON.parse(localStorage.getItem('alreadyRead'));

  const datesList = alreadyReadlList.map(news =>
    formatDateNewsRead(news.pub_date)
  );

  const uniqeDateList = datesList
    .filter((date, index) => datesList.indexOf(date) === index)
    .sort()
    .reverse();

  return (
    <section className="news">
      <ul>
        {uniqeDateList.map((date, index) => (
          <NewsCellRead
            key={index}
            alreadyReadlList={alreadyReadlList}
            date={date}
          />
        ))}
      </ul>
    </section>
  );
};
