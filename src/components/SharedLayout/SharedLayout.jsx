import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Logo, Link } from './SharedLayout.module.js';
import { SpanGO } from './SharedLayout.module.js';
import { SpanIt } from './SharedLayout.module.js';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          Welcome to Test Task <SpanGO>Go</SpanGO>
          <SpanIt>IT</SpanIt>
        </Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/tweets" end>
            Tweets
          </Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </Container>
  );
};
