import React, { useState, useContext, useCallback } from 'react';

import videosMock from '../../utils/youtube-videos-mock';

const API_URL = 'https://www.googleapis.com/youtube/v3/search';

const SearchContext = React.createContext(null);

function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error(`Can't use "useSearch" without a SearchProvider!`);
  }
  return context;
}

function SearchProvider({ children }) {
  const [videos, setVideos] = useState([]);
  const [filter, setFilter] = useState('vaporwave synthwave chillwave');
  const [video, setVideo] = useState([]);

  const getVideos = useCallback(async () => {
    try {
      const key = process.env.REACT_APP_YOUTUBE_API_KEY;
      const res = await fetch(
        `${API_URL}?part=snippet&maxResults=50&type=video&q=${filter}&key=${key}`
      );
      const data = await res.json();
      if (!data.error) {
        setVideos(data.items);
      } else {
        setVideos(videosMock.items);
      }
    } catch (error) {
      setVideos(videosMock.items);
      console.error('Error: ', error);
    }
  }, [filter]);

  const handleFilters = (filters) => {
    const allFilters = 'vaporwave synthwave chillwave';
    if (filters === 'Show All') {
      setFilter(allFilters);
    } else if (filters && filters !== '') {
      setFilter(filters);
    }
    return true;
  };

  const getVideo = useCallback(async (videoId) => {
    const API_URL_VIDEO = 'https://www.googleapis.com/youtube/v3/videos';
    try {
      const key = process.env.REACT_APP_YOUTUBE_API_KEY;
      const res = await fetch(`${API_URL_VIDEO}?part=snippet&id=${videoId}&key=${key}`);
      const data = await res.json();
      if (!data.error) {
        setVideo(data.items);
      } else {
        setVideo(videosMock.items);
      }
    } catch (error) {
      setVideo(videosMock.items);
      console.error('Error: ', error);
    }
  }, []);

  return (
    <SearchContext.Provider
      value={{ video, videos, filter, getVideos, getVideo, handleFilters }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export { useSearch };
export default SearchProvider;
