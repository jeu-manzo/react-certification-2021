import React from 'react';
import { BsSearch } from 'react-icons/bs';

import { SearchContainer } from './Searchbar.styled';

function Searchbar() {
  return (
    <SearchContainer>
      <input placeholder="Search" data-testid="searchBar" />
      <button type="button">
        <BsSearch />
      </button>
    </SearchContainer>
  );
}

export default Searchbar;
