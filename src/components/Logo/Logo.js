import React from 'react';
import styled from 'styled-components';

const ImgLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  font-size: 20px;
  color: #1b1525;
  img {
    height: 40px;
  }
`;

function Logo() {
  return (
    <ImgLogo title="logo">
      <img src="logo.png" alt="logo" />
      <span>VideoWave</span>
    </ImgLogo>
  );
}

export default Logo;
