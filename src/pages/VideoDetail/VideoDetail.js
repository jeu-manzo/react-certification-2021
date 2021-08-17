import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useSearch } from '../../providers/Search';
import LayoutVideo from '../../components/LayoutVideo';
import { Layout, DetailLayout } from './VideoDetail.styled';

function VideoDetail() {
  const { videoId } = useParams();
  const { video, getVideo } = useSearch();
  const { relatedVideos, getRelatedVideos } = useSearch();

  useEffect(() => {
    getVideo(videoId);
  }, [videoId, getVideo]);

  useEffect(() => {
    getRelatedVideos(videoId);
  }, [videoId, getRelatedVideos]);

  if (video.length > 0) {
    return (
      <Layout>
        <DetailLayout>
          <iframe
            allowFullScreen
            frameBorder="0"
            title={video[0].snippet.title}
            src={`https://www.youtube.com/embed/${videoId}?controls=0&autoplay=0`}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          />
          <h3 data-testid={video[0].snippet.title}>{video[0].snippet.title}</h3>
          <p data-testid={video[0].snippet.channelTitle}>
            {video[0].snippet.channelTitle}
          </p>
        </DetailLayout>
        <LayoutVideo videos={relatedVideos} relatedVideos />
      </Layout>
    );
  }
  return true;
}

export default VideoDetail;
