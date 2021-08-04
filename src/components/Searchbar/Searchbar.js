import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

import { SearchContainer } from './Searchbar.styled';
import { useSearch } from '../../providers/Search';

function Searchbar(props) {
  const history = useHistory();
  const { handleFilters } = useSearch();
  const [search, setSearch] = useState('');

  function handleOnClick() {
    handleFilters(search);
  }

  function handleOnChange(event) {
    const value = event.target.value.toLowerCase();
    setSearch(value);
  }

  function handleOnKeyPress(event) {
    if (event.charCode === 13) {
      history.push('/');
      handleOnClick(search);
    }
  }

  return (
    <SearchContainer smallScreen={props.smallScreen}>
      <input
        placeholder="Search"
        data-testid="searchBar"
        onChange={(e) => handleOnChange(e)}
        onKeyPress={(e) => handleOnKeyPress(e)}
      />
      <button data-testid="searchButton" type="button" onClick={handleOnClick}>
        <BsSearch />
      </button>
    </SearchContainer>
  );
}

export default Searchbar;
