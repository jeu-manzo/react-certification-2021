import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  @media (max-width: 511px) {
    padding: 10px;
  }
`;

export const Column = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  svg {
    font-size: 32px;
    margin-left: 12px;
    color: ${({ theme }) => theme.color};
    cursor: pointer;
  }
`;

export const ButtonSearch = styled.button`
  @media (min-width: 511px) {
    display: none;
  }
  @media (max-width: 511px) {
    display: flex;
    background-color: transparent;
    border: none;
    :hover {
      cursor: pointer;
    }
    svg {
      color: ${({ theme }) => theme.color};
      font-size: 24px !important;
    }
  }
`;

export const ButtonAvatar = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
  :hover {
    cursor: pointer;
  }
  svg {
    color: ${({ theme }) => theme.color};
    font-size: 28px;
  }
`;

export const ButtonLogin = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 10px;
  margin-left: 10px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.menuBorder};
  border-radius: 3px;
  font-size: 14px;
  color: ${({ theme }) => theme.color};
  svg {
    font-size: 18px;
    margin: 0 10px 0 0;
  }
  :hover {
    background-color: ${({ theme }) => theme.loginButtonHover};
    cursor: pointer;
  }
`;

export const LoadingProfile = styled.div`
  svg {
    color: ${({ theme }) => theme.iconLoadingColor};
  }
`;

export const SmallScreenSearchBar = styled.div`
  display: flex;
  padding-top: 10px;
`;

export const LeftArrow = styled.div`
  margin: 0 10px 10px 0;
  font-size: 30px;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  padding: 0;
  color: ${({ theme }) => theme.searchColor};
  cursor: pointer;
`;
