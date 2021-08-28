import React, { useEffect } from 'react';
import { useAuth } from '../../providers/Auth/Auth.provider';
import { useSearch } from '../../providers/Search';

import LayoutVideo from '../../components/LayoutVideo';
import { VideoFavorites } from './FavoriteVideos.styled';

function FavoriteVideos() {
  const { currentUser } = useAuth();
  const { favoriteVideos, getFavoriteVideos } = useSearch();

  useEffect(() => {
    getFavoriteVideos(currentUser.uid);
  }, [getFavoriteVideos, currentUser]);

  return (
    <VideoFavorites data-testid="favoriteVideos">
      <LayoutVideo videos={favoriteVideos} favoriteVideos />
    </VideoFavorites>
  );
}

export default FavoriteVideos;
