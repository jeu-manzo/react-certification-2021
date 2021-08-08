import React from 'react';
import { useLocation } from 'react-router-dom';

import LayoutVideo from '../../components/LayoutVideo';
import { useRelatedVideos } from '../../utils/hooks/useRelatedVideos';
import { Layout, DetailLayout } from './VideoDetail.styled';

function VideoDetail() {
  const location = useLocation();
  const { videoDetail } = location.state;
  const { relatedVideos } = useRelatedVideos(videoDetail.id.videoId);

  return (
    <Layout>
      <DetailLayout>
        <iframe
          allowFullScreen
          frameBorder="0"
          title={videoDetail.snippet.title}
          src={`https://www.youtube.com/embed/${videoDetail.id.videoId}?controls=0&autoplay=0`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        />
        <h3>{videoDetail.snippet.title}</h3>
        <p>{videoDetail.snippet.channelTitle}</p>
      </DetailLayout>
      <LayoutVideo videos={relatedVideos} relatedVideos />
    </Layout>
  );
}

export default VideoDetail;
