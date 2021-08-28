import React, { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import { useSearch } from '../../providers/Search';
import { filterList } from '../../utils/filterList';
import {
  Filters,
  ScrollContainer,
  FilterChip,
  ArrowLeft,
  ArrowRight,
} from './Filter.styled';

function Filter() {
  const [filterSelected, setFilterSelected] = useState(0);
  const { handleFilters } = useSearch();

  function selectFilter(filter, index) {
    handleFilters(filter);
    setFilterSelected(index);
  }

  return (
    <Filters data-testid="filters">
      <ArrowLeft title="previous">
        <BsChevronLeft />
      </ArrowLeft>
      <ScrollContainer>
        {filterList.map((filter, index) => {
          return (
            <FilterChip
              key={filter}
              alt={filter}
              onClick={() => selectFilter(filter, index)}
              filterSelected={filterSelected === index}
            >
              {filter}
            </FilterChip>
          );
        })}
      </ScrollContainer>
      <ArrowRight title="next">
        <BsChevronRight />
      </ArrowRight>
    </Filters>
  );
}

export default Filter;
