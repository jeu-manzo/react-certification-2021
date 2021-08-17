import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.color};
    font-family: 'Open Sans', sans-serif;
    transition: background-color 1s;
  }
  body, html {
    margin: 0;
    overflow-x: hidden;
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.contentBackground};
      border-radius: 100px;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 100px;
      background-image: linear-gradient(180deg, #F9CB4A 0%, #EC58BD 99%);
      box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
    }
  }
`;
