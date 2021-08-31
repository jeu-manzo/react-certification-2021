import React from 'react';

import {
  LayoutVideos,
  VideoDetail,
  VideoImg,
  VideoInfo,
  Title,
  Channel,
} from './SkeletonLoader.styled';

function SkeletonLoader(props) {
  const { mainLayoutVideos } = props;
  const { relatedVideos } = props;
  const { favoriteVideos } = props;
  const numberOfSkeletonVideos = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25, 26, 27, 28, 29, 30, 31,
  ];
  return (
    <LayoutVideos relatedVideos={relatedVideos} data-testid="skeletonLoader">
      {numberOfSkeletonVideos.map((video) => {
        return (
          <VideoDetail key={video} mainLayout={mainLayoutVideos || favoriteVideos}>
            <VideoImg />
            <VideoInfo>
              <Title />
              <Channel />
            </VideoInfo>
          </VideoDetail>
        );
      })}
    </LayoutVideos>
  );
}

export default SkeletonLoader;
