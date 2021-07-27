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
    color: #1b1525;
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
        color: #1b1525;
        font-size: 24px !important;
      }
    }
  }
`;
