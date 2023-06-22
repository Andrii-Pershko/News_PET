import Notiflix from 'notiflix';
import { createContext, useContext, useEffect, useState } from 'react';
import { getCategories } from 'service/newsAPI';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const UserProvider = ({ children }) => {
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
      { timeout: 1000, clickToClose: true }
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
        .finally(res => setLoading(false));
    }
  }, [categories.length]);

  return (
    <ThemeContext.Provider
      value={{ darkTheme, toglleTheme, loading, categories }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
