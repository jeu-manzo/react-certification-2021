import React from 'react';
import styled from 'styled-components';

import Logo from '../Logo';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

const Column = styled.div`
  display: flex;
  align-items: center;
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
        <div data-testid="avatar">Avatar</div>
      </Column>
    </Nav>
  );
}

export default Navbar;
