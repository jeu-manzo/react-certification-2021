import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  width: 50%;
  height: 32px;
  margin: 0 20px;
  border: 1px solid #cdc4d1;
  border-radius: 3px 0 0 3px;
  @media (max-width: 511px) {
    display: none;
  }
  input {
    width: 100%;
    border: none;
    padding: 2px 6px;
    background-color: transparent;
    ::placeholder {
      color: #696473;
    }
  }
  button {
    width: 65px;
    border: none;
    border-left: 1px solid #cdc4d1;
    border-radius: 0 3px 3px 0;
    background-color: #e9e5eb;
    :hover {
      cursor: pointer;
      background-color: #cdc4d1;
    }
    svg {
      color: #696473;
    }
  }
`;
