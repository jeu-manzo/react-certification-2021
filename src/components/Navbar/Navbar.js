import React, { useState } from 'react';
import { BsSearch, BsArrowLeftShort, BsPeopleCircle, BsCircleFill } from 'react-icons/bs';

import { useAuth } from '../../providers/Auth/Auth.provider';

import Logo from '../Logo';
import Switch from '../Switch';
import Searchbar from '../Searchbar';
import ModalLogin from '../ModalLogin';
import MenuAccount from '../MenuAccount';
import {
  Nav,
  ButtonSearch,
  ButtonLogin,
  Column,
  SmallScreenSearchBar,
  LeftArrow,
  LoadingProfile,
} from './Navbar.styled';

function Navbar() {
  const [searchSmallScreen, setSearchSamllScreen] = useState(false);
  const [modalLoginOpen, setModalLoginOpen] = useState(false);
  const [menuAccountOpen, setMenuAccountOpen] = useState(false);
  const { currentUser, authLoading } = useAuth();

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
          {!authLoading ? (
            <div>
              {!currentUser ? (
                <ButtonLogin
                  data-testid="buttonLogin"
                  type="button"
                  onClick={handleModalLogin}
                >
                  <BsPeopleCircle />
                  Login
                </ButtonLogin>
              ) : (
                <BsPeopleCircle
                  data-testid="profile"
                  onClick={() => setMenuAccountOpen(!menuAccountOpen)}
                />
              )}
            </div>
          ) : (
            <LoadingProfile>
              <BsCircleFill data-testid="profile-blank" />
            </LoadingProfile>
          )}
        </Column>
        {menuAccountOpen ? <MenuAccount setMenuAccountOpen={setMenuAccountOpen} /> : null}
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
