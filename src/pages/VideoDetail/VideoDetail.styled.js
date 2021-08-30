import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 20px;
  @media (max-width: 1012px) {
    flex-direction: column;
  }
`;

export const DetailLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-right: 20px;
  @media (max-width: 1012px) {
    width: 100%;
  }
  iframe {
    width: 100%;
    height: 450px;
  }
  h3 {
    margin: 19px 0 0 0;
  }
  p {
    margin: 5px 0 50px 0;
  }
`;

export const SkeletonIframe = styled.div`
  width: 100%;
  height: 450px;
`;

export const SkeletonTitle = styled.div`
  width: 100%;
  height: 25px;
  margin-top: 19px;
`;

export const SkeletonChannel = styled.div`
  width: 100%;
  height: 22px;
  margin: 5px 0 50px 0;
`;

export const DetailLayoutSkeleton = styled(DetailLayout)`
  ${SkeletonIframe},
  ${SkeletonTitle},
  ${SkeletonChannel} {
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
