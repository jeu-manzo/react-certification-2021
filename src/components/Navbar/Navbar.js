import React, { useState } from 'react';
import { BsSearch, BsPeopleCircle, BsArrowLeftShort } from 'react-icons/bs';

import Logo from '../Logo';
import Switch from '../Switch';
import Searchbar from '../Searchbar';
import { Nav, Column, SmallScreenSearchBar, LeftArrow } from './Navbar.styled';

function Navbar() {
  const [searchSmallScreen, setSearchSamllScreen] = useState(false);

  function handleSearchClick() {
    setSearchSamllScreen(true);
  }

  function handleBackClick() {
    setSearchSamllScreen(false);
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
          <button data-testid="button-search" type="button" onClick={handleSearchClick}>
            <BsSearch />
          </button>
          <BsPeopleCircle data-testid="avatar" />
        </Column>
      </Nav>
    );
  }
  return (
    <SmallScreenSearchBar>
      <LeftArrow data-testid="backButton" type="button" onClick={handleBackClick}>
        <BsArrowLeftShort />
      </LeftArrow>
      <Searchbar smallScreen />
    </SmallScreenSearchBar>
  );
}

export default Navbar;
