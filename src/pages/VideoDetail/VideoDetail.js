import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useSearch } from '../../providers/Search';
import LayoutVideo from '../../components/LayoutVideo';
import {
  Layout,
  DetailLayout,
  SkeletonIframe,
  SkeletonTitle,
  SkeletonChannel,
  DetailLayoutSkeleton,
} from './VideoDetail.styled';

function VideoDetail() {
  const { videoId } = useParams();
  const { video, getVideo, loadingVideos } = useSearch();
  const { relatedVideos, getRelatedVideos } = useSearch();
  const [loadingIframe, setLoadingIframe] = useState(true);

  useEffect(() => {
    getVideo(videoId);
  }, [videoId, getVideo]);

  useEffect(() => {
    getRelatedVideos(videoId);
  }, [videoId, getRelatedVideos]);

  return (
    <Layout>
      {!loadingVideos && video.length > 0 ? (
        <DetailLayout>
          <iframe
            allowFullScreen
            frameBorder="0"
            title={video[0].snippet.title}
            src={`https://www.youtube.com/embed/${videoId}?controls=0&autoplay=0`}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            onLoad={() => {
              setLoadingIframe(false);
            }}
          />
          <h3 data-testid={video[0].snippet.title}>{video[0].snippet.title}</h3>
          <p data-testid={video[0].snippet.channelTitle}>
            {video[0].snippet.channelTitle}
          </p>
        </DetailLayout>
      ) : null}
      {loadingVideos && loadingIframe ? (
        <DetailLayoutSkeleton>
          <SkeletonIframe />
          <SkeletonTitle />
          <SkeletonChannel />
        </DetailLayoutSkeleton>
      ) : null}
      <LayoutVideo videos={relatedVideos} relatedVideos />
    </Layout>
  );
}

export default VideoDetail;
