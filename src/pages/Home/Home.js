import React from 'react';

import Filter from '../../components/Filter';

function HomePage() {
  return (
    <section data-testid="homepage">
      <Filter />
      <div data-testid="content">Content</div>
    </section>
  );
}

export default HomePage;
