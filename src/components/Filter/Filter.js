import React from 'react';
import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Filters = styled.section`
  padding: 12px 20px;
  position: relative;
  border-top: 1px solid #1b1525;
  border-bottom: 1px solid #1b1525;
`;

const ScrollContainer = styled.div`
  display: flex;
  white-space: nowrap;
  box-sizing: border-box;
  ::-webkit-scrollbar {
    height: 0;
    background: transparent;
  }
  overflow-x: scroll;
  width: 100%;
  button:first-child {
    background-color: #1b1525;
    color: #f7fdf3;
  }
`;

const FilterChip = styled.button`
  display: flex;
  align-items: center;
  height: 32px;
  padding: 0 12px;
  background-color: #f2f0f4;
  border: 1px solid #1b1525;
  border-radius: 32px;
  font-size: 14px;
  font-weight: 600;
  margin: 0 12px;
  :hover {
    background-color: #e9e5eb;
    cursor: pointer;
  }
`;

const arrowButton = styled.button`
  position: absolute;
  width: 20px;
  top: 0;
  bottom: 0;
  background-color: transparent;
  border: none;
`;

const ArrowLeft = styled(arrowButton)`
  left: 0px;
`;

const ArrowRight = styled(arrowButton)`
  right: 0px;
`;

function Filter() {
  const filters = [
    'Show All',
    'Chillwave',
    'Vaporwave',
    'Synthwave',
    'New Wave',
    'Retro Wave',
    'Dream Wave',
    'Fashwave',
    'Dark Wave',
    'Ethereal Wave',
    'Cold Wave',
    'Lo-fi',
    'City Pop',
    'Mallsoft',
    'Future Funk',
    'Hardvapour',
    'Witch House',
  ];

  return (
    <Filters data-testid="filters">
      <ArrowLeft title="previous">
        <FaChevronLeft />
      </ArrowLeft>
      <ScrollContainer>
        {filters.map((filter) => {
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
