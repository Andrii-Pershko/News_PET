import { NavLink } from 'react-router-dom';
import './Modal.css';

export const Modal = ({ openMenu, togleModal, toglleTheme, darkTheme }) => {
  return (
    <div className={`modal-container ${openMenu ? 'is-Open' : ''}`}>
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

        <label className={`custom-check-psevdo `}>
          <div
            onClick={toglleTheme}
            className={`custom-check ${darkTheme ? 'check' : ''}`}
          ></div>
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
