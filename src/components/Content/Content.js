import React from 'react';
import styled from 'styled-components';

import videos from '../../utils/youtube-videos-mock';

const VideoContent = styled.section`
  display: flex;
  justify-content: center;
  background-color: #f2f0f4;
  padding: 20px;
`;

const Layout = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const VideoLayout = styled.div`
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

const VideoInfo = styled.div`
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

function Content() {
  return (
    <VideoContent>
      <Layout data-testid="content">
        {videos.items.map((video) => {
          if (video.id.kind === 'youtube#video') {
            return (
              <VideoLayout key={video.id.videoId}>
                <a
                  href={video.snippet.thumbnails.high.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={video.snippet.thumbnails.high.url} alt="" />
                </a>
                <VideoInfo>
                  <h3 data-testid="title">{video.snippet.title}</h3>
                  <p data-testid="channeltitle">{video.snippet.channelTitle}</p>
                </VideoInfo>
              </VideoLayout>
            );
          }
        })}
      </Layout>
    </VideoContent>
  );
}

export default Content;
