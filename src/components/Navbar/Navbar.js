import React from 'react';
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';

import Logo from '../Logo';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
`;

const Column = styled.div`
  display: flex;
  align-items: center;
  svg {
    font-size: 32px;
    margin-left: 12px;
    color: #1b1525;
  }
`;

function Navbar() {
  return (
    <Nav data-testid="navbar">
      <Column>
        <Logo />
        <span data-testid="themeToggle">Toggle</span>
      </Column>
      <Column>
        <div data-testid="searchBar">Search bar</div>
        <FaUserCircle data-testid="avatar" />
      </Column>
    </Nav>
  );
}

export default Navbar;
