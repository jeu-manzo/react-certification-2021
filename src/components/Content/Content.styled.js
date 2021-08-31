import styled from 'styled-components';

export const VideoContent = styled.section`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.contentBackground};
  transition: background-color 1s;
  div {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
  }
`;
