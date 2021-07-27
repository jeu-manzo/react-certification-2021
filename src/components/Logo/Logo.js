import React from 'react';

import { LogoLink, ImgLogo } from './Logo.styled';

function Logo() {
  return (
    <LogoLink href="/">
      <ImgLogo data-testid="logo">
        <img src="logo.png" alt="logo" />
        <span>VideoWave</span>
      </ImgLogo>
    </LogoLink>
  );
}

export default Logo;
