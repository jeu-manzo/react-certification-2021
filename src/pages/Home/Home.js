import React from 'react';

import Filter from '../../components/Filter';
import Content from '../../components/Content';

function HomePage() {
  return (
    <section data-testid="homepage">
      <Filter />
      <Content />
    </section>
  );
}

export default HomePage;
