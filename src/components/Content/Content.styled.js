import styled from 'styled-components';

export const VideoContent = styled.section`
  display: flex;
  justify-content: center;
  background-color: #f2f0f4;
  padding: 20px;
`;

export const Layout = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const VideoLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 250px;
  margin-bottom: 40px;
  img {
    display: block;
    width: 100%;
  }
  @media (max-width: 911px) {
    width: 319px;
  }
  @media (max-width: 768px) {
    width: 290px;
  }
  @media (max-width: 710px) {
    width: 250px;
  }
  @media (max-width: 630px) {
    width: 240px;
  }
  @media (max-width: 610px) {
    width: 219px;
  }
  @media (max-width: 511px) {
    width: 319px;
  }
`;

export const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  h3 {
    font-size: 14px;
    margin: 10px 0 5px 0;
    color: #1b1525;
  }
  p {
    font-size: 14px;
    margin: 0;
    color: #696473;
  }
`;
