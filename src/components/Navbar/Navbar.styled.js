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
  svg {
    font-size: 32px;
    margin-left: 12px;
    color: ${({ theme }) => theme.color};
  }
  button {
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
  }
`;

export const SmallScreenSearchBar = styled.div`
  display: flex;
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
