import Notiflix from 'notiflix';
import { createContext, useContext, useEffect, useState } from 'react';
import { getCategories, getNews } from 'service/newsAPI';
import { getDataFormat } from 'utils/utils';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const UserProvider = ({ children }) => {
  const [selectCategories, setSelectCategories] = useState('categories');
  const [loadingPagination, setLoadingPagination] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isLoading, setIsLoading] = useState(false);
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState(() => {
    const categoriesLocal = localStorage.getItem('categories');
    if (categoriesLocal !== null) {
      setLoading(false);
      return JSON.parse(categoriesLocal);
    }
    setLoading(false);
    return [];
  });
  const [currentUserDeviceShowNews, setCurrentUserDevice] = useState(() => {
    if (window.innerWidth < 768) {
      //mobile
      return 'Mobile';
    }
    if (window.innerWidth > 1280) {
      //desktop
      return 'Desctop';
    }
    //tablet
    return 'Tablet';
  });
  const [darkTheme, setDarkTheme] = useState(() => {
    const theme = localStorage.getItem('darkTheme');
    if (JSON.parse(theme)) {
      return true;
    }
    return false;
  });

  const errorRequest = () => {
    Notiflix.Notify.info(
      'Please waitt 10sec and reload page, so wery bad dackend',
      { timeout: 2000, clickToClose: true }
    );
  };

  const toglleTheme = () => {
    setDarkTheme(!darkTheme);
    localStorage.setItem('darkTheme', !darkTheme);
  };

  useEffect(() => {
    if (categories.length === 0) {
      getCategories()
        .then(res => {
          setCategories(res);
          localStorage.setItem('categories', JSON.stringify(res));
        })
        .catch(() => errorRequest())
        .finally(() => setLoading(false));
    }

    getNews(inputValue, currentPage, getDataFormat(currentDate))
      .then(res => {
        setNews(res);
      })
      .catch(res => {
        if (res.response.status === 429) {
          Notiflix.Notify.info('Too many request', {
            timeout: 2000,
          });
        } else {
          console.log('EROR', res);
          Notiflix.Notify.info('Unknown errorm please reload page', {
            timeout: 2000,
          });
        }
      })
      .finally(() => {
        setIsLoading(true);
        setLoadingPagination(false);
        window.scrollTo({
          top: -120,
          left: 0,
          behavior: 'smooth',
        });
      });

    if (localStorage.getItem('favoriteList') === null) {
      localStorage.setItem('favoriteList', JSON.stringify([]));
    }

    if (localStorage.getItem('alreadyRead') === null) {
      localStorage.setItem('alreadyRead', JSON.stringify([]));
    }
  }, [categories.length, currentDate, currentPage, inputValue, setCurrentDate]);

  return (
    <ThemeContext.Provider
      value={{
        darkTheme,
        toglleTheme,
        loading,
        categories,
        setInputValue,
        inputValue,
        news,
        setNews,
        getNews,
        isLoading,
        setCurrentDate,
        currentDate,
        currentPage,
        setCurrentPage,
        loadingPagination,
        setLoadingPagination,
        currentUserDeviceShowNews,
        setCurrentUserDevice,
        selectCategories,
        setSelectCategories,
        setIsLoading,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
