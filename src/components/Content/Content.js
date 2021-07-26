import React from 'react';

import { VideoContent, Layout, VideoLayout, VideoInfo } from './Content.styled';
import videos from '../../utils/youtube-videos-mock';

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
          return true;
        })}
      </Layout>
    </VideoContent>
  );
}

export default Content;
