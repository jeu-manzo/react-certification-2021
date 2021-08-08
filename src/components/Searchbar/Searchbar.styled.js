import styled, { css } from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  width: 50%;
  height: 32px;
  margin: 0 20px;
  border: 1px solid ${({ theme }) => theme.searchBorder};
  border-radius: 3px;
  @media (max-width: 511px) {
    display: none;
  }
  input {
    width: 100%;
    border: none;
    padding: 2px 6px;
    background-color: ${({ theme }) => theme.searchInputBackground};
    color: ${({ theme }) => theme.searchColor};
    ::placeholder {
      color: ${({ theme }) => theme.searchColor};
    }
    :focus-visible {
      outline: none;
    }
  }
  button {
    width: 65px;
    border: none;
    border: 1px solid ${({ theme }) => theme.searchBorder};
    background-color: ${({ theme }) => theme.searchBackground};
    :hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.searchButtonBackground};
      transition: background-color 0.5s cubic-bezier(0.05, 0, 0, 1);
    }
    svg {
      color: ${({ theme }) => theme.searchColor};
    }
  }

  ${(props) =>
    props.smallScreen &&
    css`
      display: flex !important;
      width: 100%;
      margin: 0 0 10px 0;
    `};
`;
