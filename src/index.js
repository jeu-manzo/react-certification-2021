import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import App from './components/App';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F9F3FD;
    font-family: 'Open Sans', sans-serif;
  }
  body, html {
    overflow-x: hidden;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);
