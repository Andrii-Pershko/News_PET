import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 50px;
  border-bottom: 1px solid #471ca9;

  > nav {
    display: flex;
  }
`;

export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
  color: #471ca9;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-size: 22px;
  font-weigth: 600;
  &.active {
    color: #471ca9;
  }
`;
export const SpanGO = styled.span`
  color: black;
`;

export const SpanIt = styled.span`
  color: #ff5c01;
`;
