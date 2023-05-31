import { NavLink } from 'react-router-dom';
import './Modal.css';
import { useEffect, useState } from 'react';

export const Modal = ({ openMenu, togleModal }) => {
  const [darkTheme, setDarkTheme] = useState(() => {
    let theme = localStorage.getItem('Theme');
    theme = JSON.parse(theme);
    console.log('first', theme);

    if (theme === undefined && theme === false) {
      localStorage.setItem('Theme', false);
      return false;
    }
    return true;
  });

  const toglleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  useEffect(() => {
    localStorage.setItem('Theme', darkTheme);
  }, [darkTheme]);

  return (
    <div className={`modal-container ${true ? 'is-Open' : ''}`}>
      <div className="modal">
        <ul>
          <li className="navigations-box">
            <NavLink
              className="home-page navigations-btn"
              onClick={togleModal}
              to="/"
              end
            >
              Home
            </NavLink>
          </li>
          <li className="navigations-box">
            <NavLink
              className="favorite-page navigations-btn"
              onClick={togleModal}
              to="/favorite"
              end
            >
              Favorite
            </NavLink>
          </li>
          <li className="navigations-box">
            <NavLink
              className="read-page navigations-btn"
              onClick={togleModal}
              to="/read"
              end
            >
              Read
            </NavLink>
          </li>
        </ul>

        <label
          onChange={toglleTheme}
          className={`custom-check-psevdo ${darkTheme ? 'darkOn' : ''}`}
        >
          <div className={`custom-check ${darkTheme ? 'check' : ''}`}></div>
          <input
            className="visually-hidden "
            type="checkbox"
            name="hobby"
            value="music"
          />
        </label>
      </div>
    </div>
  );
};
