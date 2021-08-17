import styled from 'styled-components';

export const VideoContent = styled.section`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.contentBackground};
  padding: 20px;
  transition: background-color 1s;
  div {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;
