import React from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

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
        <BsChevronLeft />
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
        <BsChevronRight />
      </ArrowRight>
    </Filters>
  );
}

export default Filter;
