import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';

import Logo from '../Logo';
import Switch from '../Switch';
import Searchbar from '../Searchbar';
import { Nav, Column } from './Navbar.styled';

function Navbar() {
  return (
    <Nav data-testid="navbar">
      <Column>
        <Logo />
        <Switch />
      </Column>
      <Searchbar />
      <Column>
        <button type="button">
          <BsSearch />
        </button>
        <FaUserCircle data-testid="avatar" />
      </Column>
    </Nav>
  );
}

export default Navbar;
