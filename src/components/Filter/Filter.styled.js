import styled from 'styled-components';

export const Filters = styled.section`
  padding: 12px 20px;
  position: relative;
  border-top: 1px solid ${({ theme }) => theme.filterBorder};
  border-bottom: 1px solid ${({ theme }) => theme.filterBorder};
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
    background-color: ${({ theme }) => theme.chipSelectedBackground};
    color: ${({ theme }) => theme.chipSelectedColor};
  }
`;

export const FilterChip = styled.button`
  display: flex;
  align-items: center;
  height: 32px;
  padding: 0 12px;
  background-color: ${({ theme }) => theme.chipBackground};
  border: 1px solid ${({ theme }) => theme.color};
  border-radius: 32px;
  font-size: 14px;
  font-weight: 600;
  margin: 0 12px;
  color: ${({ theme }) => theme.color};
  transition: background-color 0.5s cubic-bezier(0.05, 0, 0, 1);
  :hover {
    background-color: ${({ theme }) => theme.chipBackgroundHover};
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
  color: ${({ theme }) => theme.color};
`;

export const ArrowLeft = styled(arrowButton)`
  left: 0px;
`;

export const ArrowRight = styled(arrowButton)`
  right: 0px;
`;
