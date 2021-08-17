import React, { useEffect } from 'react';

import LayoutVideo from '../LayoutVideo';
import { VideoContent } from './Content.styled';
import { useSearch } from '../../providers/Search';

function Content() {
  const { videos, getVideos } = useSearch();

  useEffect(() => {
    getVideos();
  }, [getVideos]);

  return (
    <VideoContent data-testid="content">
      <LayoutVideo videos={videos} mainLayoutVideos />
    </VideoContent>
  );
}

export default Content;
