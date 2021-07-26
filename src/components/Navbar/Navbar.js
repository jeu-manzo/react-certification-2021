import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

import Logo from '../Logo';
import Switch from '../Switch';
import { Nav, Column } from './Navbar.styled';

function Navbar() {
  return (
    <Nav data-testid="navbar">
      <Column>
        <Logo />
        <Switch />
      </Column>
      <div data-testid="searchBar">Search bar</div>
      <Column>
        <FaUserCircle data-testid="avatar" />
      </Column>
    </Nav>
  );
}

export default Navbar;
