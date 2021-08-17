import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
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
`;
