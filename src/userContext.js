import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const UserProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(() => {
    const theme = localStorage.getItem('darkTheme');
    if (JSON.parse(theme)) {
      return true;
    }
    return false;
  });

  const toglleTheme = () => {
    setDarkTheme(!darkTheme);
    localStorage.setItem('darkTheme', !darkTheme);
  };

  return (
    <ThemeContext.Provider value={{ darkTheme, toglleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
