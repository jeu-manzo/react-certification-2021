import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

import Logo from '../Logo';
import { Nav, Column } from './Navbar.styled';

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
