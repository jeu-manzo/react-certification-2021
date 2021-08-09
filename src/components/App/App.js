import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { useTheme } from '../../providers/Theme';
import { GlobalStyle } from '../../providers/Theme/global';
import SearchProvider from '../../providers/Search';
import Navbar from '../Navbar';
import HomePage from '../../pages/Home';
import VideoDetail from '../../pages/VideoDetail';

function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <BrowserRouter>
          <SearchProvider>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/VideoDetail/:videoId">
                <VideoDetail />
              </Route>
            </Switch>
          </SearchProvider>
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
}

export default App;
