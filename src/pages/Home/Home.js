import React from 'react';

import Filter from '../../components/Filter';
import Content from '../../components/Content';

import { Home } from './Home.styled';

function HomePage() {
  return (
    <Home data-testid="homepage">
      <Filter />
      <Content />
    </Home>
  );
}

export default HomePage;
