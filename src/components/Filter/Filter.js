import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import { filterList } from '../../utils/filterList';
import {
  Filters,
  ScrollContainer,
  FilterChip,
  ArrowLeft,
  ArrowRight,
} from './Filter.styled';

function Filter() {
  return (
    <Filters data-testid="filters">
      <ArrowLeft title="previous">
        <FaChevronLeft />
      </ArrowLeft>
      <ScrollContainer>
        {filterList.map((filter) => {
          return (
            <FilterChip key={filter} alt={filter}>
              {filter}
            </FilterChip>
          );
        })}
      </ScrollContainer>
      <ArrowRight title="next">
        <FaChevronRight />
      </ArrowRight>
    </Filters>
  );
}

export default Filter;
