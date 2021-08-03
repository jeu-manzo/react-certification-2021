import React from 'react';

import LayoutVideo from '../LayoutVideo';
import { VideoContent } from './Content.styled';
import { useSearch } from '../../providers/Search';

function Content() {
  const { videos } = useSearch();

  return (
    <VideoContent data-testid="content">
      <LayoutVideo videos={videos} mainLayoutVideos />
    </VideoContent>
  );
}

export default Content;
