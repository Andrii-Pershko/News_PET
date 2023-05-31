import { NavLink } from 'react-router-dom';
import './Modal.css';

export const Modal = ({ openMenu }) => {
  const container = document.body.children[2];
  console.log('container', container);

  return (
    <div className={`modal-container ${openMenu ? 'is-Open' : ''}`}>
      <div className="modal">
        <ul>
          <li className="navigations-btn">
            <NavLink className="navigations-btn" to="/" end>
              Home
            </NavLink>
          </li>
          <li className="navigations-btn">
            <NavLink className="navigations-btn" to="/favorite" end>
              Favorite
            </NavLink>
          </li>
          <li className="navigations-btn">
            <NavLink className="navigations-btn" to="/read" end>
              Read
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
