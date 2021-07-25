import React from 'react';
import styled from 'styled-components';

import Logo from '../Logo';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  border-bottom: 1px solid black;
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

function Navbar() {
  return (
    <Nav title="navbar">
      <Column>
        <Logo />
        <span title="themeToggle">Toggle</span>
      </Column>
      <Column>
        <div title="searchBar">Search bar</div>
        <div title="avatar">Avatar</div>
      </Column>
    </Nav>
  );
}

export default Navbar;
