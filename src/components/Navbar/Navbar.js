import React, { useState } from 'react';
import { BsSearch, BsArrowLeftShort, BsPeopleCircle } from 'react-icons/bs';

import Logo from '../Logo';
import Switch from '../Switch';
import Searchbar from '../Searchbar';
import ModalLogin from '../ModalLogin';
import {
  Nav,
  ButtonSearch,
  ButtonLogin,
  Column,
  SmallScreenSearchBar,
  LeftArrow,
} from './Navbar.styled';

function Navbar() {
  const [searchSmallScreen, setSearchSamllScreen] = useState(false);
  const [modalLoginOpen, setModalLoginOpen] = useState(false);

  function handleSearchClick() {
    setSearchSamllScreen(true);
  }

  function handleBackClick() {
    setSearchSamllScreen(false);
  }

  function handleModalLogin() {
    setModalLoginOpen(!modalLoginOpen);
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
          <ButtonSearch
            data-testid="button-search"
            type="button"
            onClick={handleSearchClick}
          >
            <BsSearch />
          </ButtonSearch>
          <ButtonLogin data-testid="buttonLogin" type="button" onClick={handleModalLogin}>
            <BsPeopleCircle />
            Login
          </ButtonLogin>
        </Column>
        {modalLoginOpen ? <ModalLogin closeModal={handleModalLogin} /> : null}
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
