import { Suspense, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './SharedLayout.css';
import { Container } from 'components/Container/Container.jsx';

import { Modal } from 'components/Modal/Modal';

export const SharedLayout = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const togleStatusMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Container>
      <header>
        <p className="logo">News</p>
        <nav>
          <NavLink className="link" to="/" end>
            Home
          </NavLink>
          <NavLink className="link" to="/favorine" end>
            Favorine
          </NavLink>
          <NavLink className="link" to="/read" end>
            Read
          </NavLink>
        </nav>
        <div style={{ width: '173px' }}>
          <form onSubmit={handleSubmit} className="not-active-search">
            <button className="btn-submit" type="submit"></button>
            <input placeholder="Search" />
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
      <Modal openMenu={openMenu}></Modal>
    </Container>
  );
};
