import styled from 'styled-components';

export const Filters = styled.section`
  padding: 12px 20px;
  position: relative;
  border-top: 1px solid #1b1525;
  border-bottom: 1px solid #1b1525;
`;

export const ScrollContainer = styled.div`
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

export const FilterChip = styled.button`
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

export const arrowButton = styled.button`
  position: absolute;
  width: 20px;
  top: 0;
  bottom: 0;
  background-color: transparent;
  border: none;
`;

export const ArrowLeft = styled(arrowButton)`
  left: 0px;
`;

export const ArrowRight = styled(arrowButton)`
  right: 0px;
`;
