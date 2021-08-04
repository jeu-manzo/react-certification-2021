import React, { useState } from 'react';
import { BsSearch, BsPeopleCircle } from 'react-icons/bs';

import Logo from '../Logo';
import Switch from '../Switch';
import Searchbar from '../Searchbar';
import { Nav, Column } from './Navbar.styled';

function Navbar() {
  const [searchSmallScreen, setSearchSamllScreen] = useState(false);

  function handleSearchClick() {
    setSearchSamllScreen(true);
  }

  if (!searchSmallScreen) {
    return (
      <Nav data-testid="navbar">
        <Column>
          <Logo />
          <Switch />
        </Column>
        <Searchbar />
        <Column>
          <button type="button" onClick={handleSearchClick}>
            <BsSearch />
          </button>
          <BsPeopleCircle data-testid="avatar" />
        </Column>
      </Nav>
    );
  }
  return <Searchbar smallScreen />;
}

export default Navbar;
