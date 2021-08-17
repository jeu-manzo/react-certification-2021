import styled from 'styled-components';

export const LogoLink = styled.a`
  text-decoration: none;
`;

export const ImgLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.color};
  img {
    height: 35px;
  }
`;
