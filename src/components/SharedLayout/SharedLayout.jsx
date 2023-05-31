import { Suspense, useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import './SharedLayout.css';
import { Container } from 'components/Container/Container.jsx';

import { Modal } from 'components/Modal/Modal';

export const SharedLayout = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const togleStatusMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleClickToSearch = () => {
    setOpenSearchBar(!openSearchBar);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(inputValue);
    navigate('/');
  };

  return (
    <Container>
      <header>
        <p className="logo">News</p>
        <nav>
          <NavLink className="link" to="/" end>
            Home
          </NavLink>
          <NavLink className="link" to="/favorite" end>
            Favorine
          </NavLink>
          <NavLink className="link" to="/read" end>
            Read
          </NavLink>
        </nav>
        <div className={`search-box`}>
          <form
            onSubmit={handleSubmit}
            className={`search-form ${openSearchBar ? 'searchOpen' : ''}`}
          >
            <button
              className="btn-submit"
              onClick={handleClickToSearch}
              type={!openSearchBar ? 'submit' : 'button'}
            ></button>
            <input
              onChange={e => setInputValue(e.target.value)}
              value={inputValue}
              placeholder="Search"
            />
          </form>
        </div>
        <button
          onClick={togleStatusMenu}
          className={`menu ${openMenu ? 'active-btn' : ''}`}
        ></button>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      <Modal
        togleModal={togleStatusMenu}
        openMenu={openMenu}
        closeSearch={handleClickToSearch}
      ></Modal>
    </Container>
  );
};
