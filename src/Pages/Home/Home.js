import { useState } from 'react';
import { useTheme } from 'userContext';
import './Home.css';
import Calendar from 'react-calendar';
import './Calendar.css';
import { NewsCard } from 'components/NewsCard/NewsCard';
import { Weather } from 'components/Weather/Weather';
import { Pagination } from 'components/Pagination/Pagination';
import { NotFoundNews } from 'components/NotFoundPage/NotFoundNews';
import { formatDate, getDataFormat } from 'utils/utils';
import { Categories } from 'components/Categories/Categories';

export const Home = () => {
  const [isOpenFilterMenu, setIsOpenFilterMenu] = useState(false);
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);
  const form = document.querySelector('form');

  const {
    categories,
    setNews,
    news,
    isLoading,
    setCurrentDate,
    currentDate,
    setCurrentPage,
    setInputValue,
    selectCategories,
    setSelectCategories,
    setIsLoading,
  } = useTheme();

  const clickFilter = e => {
    form.reset();
    setIsOpenFilterMenu(!isOpenFilterMenu);
    if (isOpenCalendar) {
      setIsOpenCalendar(!isOpenCalendar);
    }

    if (e.target.dataset.inf) {
      setSelectCategories(e.target.dataset.inf);
      setInputValue(e.target.dataset.inf);
    }
  };

  const handleCalendar = e => {
    const today = new Date();
    setIsLoading(false);
    if (e > today) {
      alert('We cannot see into the future.');
      return;
    }
    setCurrentPage(1);
    setCurrentDate(e);
    setIsOpenCalendar(false);
  };

  const handleCalendarButton = () => {
    if (isOpenFilterMenu) {
      setIsOpenFilterMenu(!isOpenFilterMenu);
    }
    setIsOpenCalendar(!isOpenCalendar);
  };

  return (
    <>
      <section className="news filter">
        <div className="button-box">
          <Categories
            clickFilter={clickFilter}
            categories={categories}
            selectCategories={selectCategories}
            setIsOpenFilterMenu={setIsOpenFilterMenu}
            isOpenFilterMenu={isOpenFilterMenu}
            setNews={setNews}
          />
          <button
            onKeyDown={e => {
              if (e.code === 'Escape' && isOpenCalendar) {
                setIsOpenCalendar(!isOpenCalendar);
              }
            }}
            className={`calendar_button ${
              isOpenCalendar ? 'isOpenButton' : ''
            }`}
            onClick={handleCalendarButton}
          >
            <span className="date-button">{getDataFormat(currentDate)}</span>
          </button>
          <Calendar
            className={`home-calendar ${isOpenCalendar ? 'is-open-calendar' : ''}`}
            onChange={handleCalendar}
            value={currentDate}
            locale={'eng'}
            formatShortWeekday={(_, date) => formatDate(date)}
          />
        </div>
        {news.docs === undefined || news.docs.length === 0 ? (
          !isLoading ? (
            <p>Loading</p>
          ) : (
            <NotFoundNews />
          )
        ) : (
          news.docs.length === 0 || (
            <>
              <ul>
                <Weather />
                {news.docs.map((news, index) => (
                  <NewsCard key={index} news={news} />
                ))}
              </ul>
              <Pagination maxPage={Math.ceil(news.meta.hits / 10 - 1)} />
            </>
          )
        )}
      </section>
    </>
  );
};
