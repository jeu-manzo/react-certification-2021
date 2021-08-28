import styled, { css } from 'styled-components';

export const LayoutVideos = styled.div`
  width: ${({ relatedVideos }) => (relatedVideos ? '40%' : '100%')};
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

export const VideoFavorite = styled.span`
  display: none;
  position: absolute;
  top: 10px;
  right: 10px;
  color: ${({ theme }) => theme.color};
  font-size: 16px;
  background: rgba(0, 0, 0, 0.6);
  padding: 5px;
  border-radius: 2px;
  svg {
    cursor: pointer;
  }
`;

export const VideoImg = styled.div`
  position: relative;
  &:hover ${VideoFavorite} {
    display: flex;
  }
`;

export const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  h3 {
    font-size: 14px;
    margin: 10px 0 5px 0;
    color: ${({ theme }) => theme.color};
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  p {
    font-size: 14px;
    margin: 0;
    color: ${({ theme }) => theme.layoutColor};
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
