import styled, { css } from 'styled-components';

export const LayoutVideos = styled.div`
  width: 100%;
`;

export const VideoDetail = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 40px;
  img {
    display: block;
    height: 94px;
    width: 168px;
    object-fit: cover;
  }
  ${(props) =>
    props.mainLayoutVideos &&
    css`
      flex-direction: column;
      width: 250px;
      margin-bottom: 40px;
      img {
        display: block;
        width: 100%;
        height: 142px;
        object-fit: cover;
      }
      @media (max-width: 911px) {
        width: 319px;
        img {
          height: 170px;
        }
      }
      @media (max-width: 768px) {
        width: 290px;
        img {
          height: 160px;
        }
      }
      @media (max-width: 710px) {
        width: 250px;
        img {
          height: 140px;
        }
      }
      @media (max-width: 630px) {
        width: 240px;
        img {
          height: 130px;
        }
      }
      @media (max-width: 610px) {
        width: 219px;
        img {
          height: 120px;
        }
      }
      @media (max-width: 511px) {
        width: 319px;
        img {
          height: 170px;
        }
      }
    `};
`;

export const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  h3 {
    font-size: 14px;
    margin: 10px 0 5px 0;
    color: #1b1525;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  p {
    font-size: 14px;
    margin: 0;
    color: #696473;
  }
`;
