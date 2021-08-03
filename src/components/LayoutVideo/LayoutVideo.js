import React from 'react';
import { Link } from 'react-router-dom';

import { LayoutVideos, VideoDetail, VideoInfo } from './LayoutVideo.styled';

function LayoutVideo(props) {
  const { mainLayoutVideos } = props;
  return (
    <LayoutVideos data-testid="videos">
      {props.videos.length > 0 &&
        props.videos.map((video) => {
          if (video.snippet && video.id.kind === 'youtube#video') {
            return (
              <VideoDetail key={video.id.videoId} mainLayoutVideos={mainLayoutVideos}>
                <Link
                  to={{
                    pathname: `/VideoDetail/${video.id.videoId}`,
                    state: {
                      videoDetail: video,
                    },
                  }}
                >
                  <img src={video.snippet.thumbnails.high.url} alt="" />
                </Link>
                <VideoInfo>
                  <h3 data-testid="title">{video.snippet.title}</h3>
                  <p data-testid="channeltitle">{video.snippet.channelTitle}</p>
                </VideoInfo>
              </VideoDetail>
            );
          }
          return true;
        })}
    </LayoutVideos>
  );
}

export default LayoutVideo;
