import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const UserProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toglleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <ThemeContext.Provider value={{ darkTheme, toglleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
