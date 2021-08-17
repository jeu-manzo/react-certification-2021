import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import ThemeControlProvider from './providers/Theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeControlProvider>
      <App />
    </ThemeControlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
