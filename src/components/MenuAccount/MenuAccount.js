import React from 'react';
import { Link } from 'react-router-dom';
import { BsHeart, BsBoxArrowInRight } from 'react-icons/bs';

import { useAuth } from '../../providers/Auth/Auth.provider';

import { Menu, MenuOption } from './MenuAccount.styled';

function MenuAccount(props) {
  const { currentUser, logout } = useAuth();

  async function signout() {
    props.setMenuAccountOpen(false);
    await logout();
  }

  return (
    <Menu data-testid="menuAccount">
      {currentUser ? <p>{currentUser.email}</p> : null}
      <MenuOption data-testid="optionFavoriteVideos">
        <Link
          to={{
            pathname: '/favoriteVideos',
          }}
          onClick={() => props.setMenuAccountOpen(false)}
        >
          <BsHeart />
          Favorite Videos
        </Link>
      </MenuOption>
      <MenuOption type="button" onClick={signout} data-testid="optionLogout">
        <BsBoxArrowInRight />
        Log out
      </MenuOption>
    </Menu>
  );
}

export default MenuAccount;
