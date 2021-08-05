import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SearchProvider from '../../providers/Search';
import Navbar from '../Navbar';
import HomePage from '../../pages/Home';
import VideoDetail from '../../pages/VideoDetail';

function App() {
  return (
    <>
      <BrowserRouter>
        <SearchProvider>
          <Switch>
            <Route exact path="/">
              <Navbar />
              <HomePage />
            </Route>
            <Route exact path="/VideoDetail/:id">
              <Navbar />
              <VideoDetail />
            </Route>
          </Switch>
        </SearchProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
