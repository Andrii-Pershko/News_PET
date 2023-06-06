import { Suspense, useEffect, useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { Container } from 'components/Container/Container.jsx';
import { Modal } from 'components/Modal/Modal';
import './SharedLayout.css';
import './darkTheme.css';

export const SharedLayout = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [darkTheme, setDarkTheme] = useState(() => {
    let themeDark = localStorage.getItem('Theme');
    themeDark = JSON.parse(themeDark);
    if (themeDark === undefined && themeDark === false) {
      localStorage.setItem('Theme', false);
      return false;
    }
    return themeDark;
  });
  const navigate = useNavigate();

  console.log('first', darkTheme);

  const toglleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  useEffect(() => {
    if (document.styleSheets[4]) {
      document.styleSheets[4].disabled = !darkTheme;
    }
    localStorage.setItem('Theme', darkTheme);
  }, [darkTheme]);

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
          <NavLink className="link home" to="/" end>
            Home
          </NavLink>
          <NavLink className="link favorite" to="/favorite" end>
            Favorite
          </NavLink>
          <NavLink className="link read" to="/read" end>
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
        <label className={`custom-check-psevdo js-close`}>
          <div
            onClick={toglleTheme}
            className={`custom-check  ${darkTheme ? 'check' : ''}`}
          ></div>
          <input
            className="visually-hidden "
            type="checkbox"
            name="hobby"
            value="music"
          />
        </label>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      <Modal
        toglleTheme={toglleTheme}
        togleModal={togleStatusMenu}
        openMenu={openMenu}
        closeSearch={handleClickToSearch}
        darkTheme={darkTheme}
      ></Modal>
    </Container>
  );
};
