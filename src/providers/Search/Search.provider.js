import React, { useContext, useCallback } from 'react';
import { firestore } from '../../services/Firebase/firebase';

import { useVideosReducer } from '../../utils/hooks/useVideosReducer';

import videosMock from '../../utils/youtube-videos-mock';

const API_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_URL_VIDEO = 'https://www.googleapis.com/youtube/v3/videos';

const SearchContext = React.createContext(null);

function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error(`Can't use "useSearch" without a SearchProvider!`);
  }
  return context;
}

function SearchProvider({ children }) {
  const [
    { videos, video, relatedVideos, favoriteVideos, filter, loadingVideos },
    dispatch,
  ] = useVideosReducer();

  const getVideos = useCallback(async () => {
    try {
      dispatch({ type: 'LOADING_VIDEOS', loading: true });
      const key = process.env.REACT_APP_YOUTUBE_API_KEY;
      const res = await fetch(
        `${API_URL}?part=snippet&maxResults=50&type=video&q=${filter}&key=${key}`
      );
      const data = await res.json();
      dispatch({ type: 'SEARCH_VIDEOS', data });
      dispatch({ type: 'LOADING_VIDEOS', loading: false });
    } catch (error) {
      dispatch({ type: 'SEARCH_VIDEOS', data: videosMock.items });
      dispatch({ type: 'LOADING_VIDEOS', loading: false });
      console.error('Error: ', error);
    }
  }, [filter, dispatch]);

  const handleFilters = (filters) => {
    const allFilters = 'vaporwave synthwave chillwave';
    if (filters === 'Show All') {
      dispatch({ type: 'FILTERS', filter: allFilters });
    } else if (filters && filters !== '') {
      dispatch({ type: 'FILTERS', filter: filters });
    }
    return true;
  };

  const getVideo = useCallback(
    async (videoId) => {
      try {
        dispatch({ type: 'LOADING_VIDEOS', loading: true });
        const key = process.env.REACT_APP_YOUTUBE_API_KEY;
        const res = await fetch(`${API_URL_VIDEO}?part=snippet&id=${videoId}&key=${key}`);
        const data = await res.json();
        dispatch({ type: 'VIDEO_BY_ID', data });
        dispatch({ type: 'LOADING_VIDEOS', loading: false });
      } catch (error) {
        dispatch({ type: 'VIDEO_BY_ID', data: videosMock.items });
        dispatch({ type: 'LOADING_VIDEOS', loading: false });
        console.error('Error: ', error);
      }
    },
    [dispatch]
  );

  const getRelatedVideos = useCallback(
    async (videoId) => {
      try {
        dispatch({ type: 'LOADING_VIDEOS', loading: true });
        const key = process.env.REACT_APP_YOUTUBE_API_KEY;
        const res = await fetch(
          `${API_URL}?part=snippet&maxResults=50&type=video&relatedToVideoId=${videoId}&key=${key}`
        );
        const data = await res.json();
        dispatch({ type: 'RELATED_VIDEOS', data });
        dispatch({ type: 'LOADING_VIDEOS', loading: false });
      } catch (error) {
        dispatch({ type: 'RELATED_VIDEOS', data: videosMock.items });
        dispatch({ type: 'LOADING_VIDEOS', loading: false });
        console.error('Error: ', error);
      }
    },
    [dispatch]
  );

  const getFavoriteVideos = useCallback(
    (currenUserId) => {
      try {
        dispatch({ type: 'LOADING_VIDEOS', loading: true });
        const collection = firestore
          .collection('users')
          .doc(currenUserId)
          .collection('videos');
        collection.onSnapshot((querySnapshot) => {
          const data = [];
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });
          dispatch({ type: 'FAVORITE_VIDEOS', data });
          dispatch({ type: 'LOADING_VIDEOS', loading: false });
        });
      } catch (error) {
        dispatch({ type: 'LOADING_VIDEOS', loading: false });
        console.error('Error: ', error);
      }
    },
    [dispatch]
  );

  return (
    <SearchContext.Provider
      value={{
        video,
        videos,
        relatedVideos,
        favoriteVideos,
        filter,
        loadingVideos,
        getVideos,
        getVideo,
        handleFilters,
        getRelatedVideos,
        getFavoriteVideos,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export { useSearch };
export default SearchProvider;
