import styled, { css } from 'styled-components';

export const LayoutVideos = styled.div`
  width: ${({ relatedVideos }) => (relatedVideos ? '40%' : '100%')};
`;

export const VideoImg = styled.div`
  display: block;
  height: 94px;
  width: 168px;
  object-fit: cover;
`;

export const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  box-sizing: border-box;
  width: 100%;
`;

export const Title = styled.div`
  height: 14px;
  width: 100%;
  margin: 10px 0 5px 0;
`;

export const Channel = styled.div`
  height: 14px;
  width: 100%;
`;

export const VideoDetail = styled.div`
  display: flex;
  align-items: flex-start;
  height: 94px;
  margin-bottom: 40px;
  ${(props) =>
    props.mainLayout &&
    css`
      flex-direction: column;
      height: auto;
      width: 250px;
      margin-bottom: 40px;
      ${VideoImg} {
        display: block;
        width: 100%;
        height: 142px;
      }
      @media (max-width: 911px) {
        width: 319px;
        ${VideoImg} {
          height: 170px;
        }
      }
      @media (max-width: 768px) {
        width: 290px;
        ${VideoImg} {
          height: 160px;
        }
      }
      @media (max-width: 710px) {
        width: 250px;
        ${VideoImg} {
          height: 140px;
        }
      }
      @media (max-width: 630px) {
        width: 240px;
        ${VideoImg} {
          height: 130px;
        }
      }
      @media (max-width: 610px) {
        width: 219px;
        ${VideoImg} {
          height: 120px;
        }
      }
      @media (max-width: 511px) {
        width: 319px;
        ${VideoImg} {
          height: 170px;
        }
      }
    `};
  ${VideoImg},
  ${Title},
  ${Channel} {
    background: linear-gradient(
        to right,
        rgba(${({ theme }) => theme.loadingColor} 0),
        rgba(${({ theme }) => theme.loadingColor} 0.5) 50%,
        rgba(${({ theme }) => theme.loadingColor} 0) 80%
      ),
      ${({ theme }) => theme.loadingBackground};
    background-repeat: repeat-y;
    background-size: 50px 500px;
    background-position: 0 0;
    animation: shine 1s infinite;
  }
  @keyframes shine {
    to {
      background-position: 100% 0;
    }
  }
`;
