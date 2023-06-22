import { getTopNews } from 'service/newsAPI';
import { useEffect, useState } from 'react';
import { useTheme } from 'userContext';
import './Home.css';
import Calendar from 'react-calendar';
import './Calendar.css';
import { NewsCard } from 'components/NewsCard/NewsCard';
import { Weather } from 'components/Weather/Weather';
import { Pagination } from 'components/Pagination/Pagination';
import { NotFound } from 'Pages/NotFound/NotFound';
import { NotFoundNews } from 'components/NotFoundPage/NotFoundNews';

export const Home = () => {
  const [value, onChange] = useState(new Date());
  const [isOpenFilterMenu, setIsOpenFilterMenu] = useState(false);
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);
  const [selectCategories, setSelectCategories] = useState('categories');
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentUserDeviceShowNews, setCurrentUserDevice] = useState(() => {
    if (window.innerWidth < 768) {
      //mobile
      return 4;
    }
    if (window.innerWidth > 1200) {
      //desktop
      return 8;
    }
    //tablet
    return 7;
  });

  const paginationNews = news.slice(
    currentPage * currentUserDeviceShowNews - currentUserDeviceShowNews,
    currentPage * currentUserDeviceShowNews
  );

  const { categories } = useTheme();

  useEffect(() => {
    getTopNews(selectCategories)
      .then(res => setNews(res.data.results))
      .catch(error => {
        console.log('error', error);
        setNews([]);
      });

    if (localStorage.getItem('favoriteList') === null) {
      localStorage.setItem('favoriteList', JSON.stringify([]));
    }

    if (localStorage.getItem('alreadyRead') === null) {
      localStorage.setItem('alreadyRead', JSON.stringify([]));
    }
  }, [selectCategories]);

  const clickFilter = e => {
    setIsOpenFilterMenu(!isOpenFilterMenu);
    if (isOpenCalendar) {
      setIsOpenCalendar(!isOpenCalendar);
    }

    if (e.target.dataset.inf) {
      setSelectCategories(e.target.dataset.inf);
    }
  };

  const formatDate = date => {
    const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    return days[date.getDay()];
  };

  const handleCalendar = e => {
    const today = new Date();

    if (e > today) {
      alert('We cannot see into the future.');
      return;
    }
    onChange(e);
  };
  const getDataFormat = date => {
    const year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();

    if (Number(month) < 10) {
      month = '0' + month;
    }
    if (Number(day) < 10) {
      day = '0' + day;
    }
    return `${day}/${month}/${year}`;
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
          <button
            onKeyDown={e => {
              if (e.code === 'Escape' && isOpenFilterMenu) {
                setIsOpenFilterMenu(!isOpenFilterMenu);
              }
            }}
            className={`open-categories ${
              !isOpenFilterMenu ? 'open-list-filter' : ''
            }`}
            onClick={clickFilter}
          >
            {selectCategories}
          </button>

          <ul
            className={`filter-list ${
              isOpenFilterMenu ? 'is-open-filter-list' : ''
            }`}
          >
            {categories.map(categorie => (
              <li key={categorie.section} onClick={clickFilter}>
                <span data-inf={`${categorie.section}`}>
                  {categorie.display_name}
                </span>
              </li>
            ))}
          </ul>
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
            <span className="date-button">{getDataFormat(value)}</span>
          </button>
          <Calendar
            className={isOpenCalendar ? 'is-open-calendar' : ''}
            onChange={handleCalendar}
            value={value}
            locale={'eng'}
            formatShortWeekday={(locale, date) => formatDate(date)}
          />
        </div>
        <div> </div>
        {news.length === 0 ? (
          <NotFoundNews />
        ) : (
          <>
            <ul>
              <Weather />
              {paginationNews.map((news, index) => (
                <NewsCard key={index} news={news} />
              ))}
            </ul>
            <Pagination
              maxPage={Math.ceil(news.length / currentUserDeviceShowNews)}
              userDevice={currentUserDeviceShowNews}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </>
        )}
      </section>
    </>
  );
};
