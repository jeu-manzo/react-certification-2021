import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { useTheme } from '../../providers/Theme';
import { GlobalStyle } from '../../utils/global';
import AuthProvider from '../../providers/Auth/Auth.provider';
import SearchProvider from '../../providers/Search';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Navbar from '../Navbar';
import HomePage from '../../pages/Home';
import VideoDetail from '../../pages/VideoDetail';
import FavoriteVideos from '../../pages/FavoriteVideos/FavoriteVideos';
import NoMatch from '../../pages/NoMatch/NoMatch';

function App() {
  const { theme } = useTheme();

  return (
    <AuthProvider>
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
                <PrivateRoute path="/favoriteVideos" component={FavoriteVideos} />
                <Route path="*">
                  <NoMatch />
                </Route>
              </Switch>
            </SearchProvider>
          </BrowserRouter>
        </>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
