import React, { useState, useContext } from 'react';

import config from '../../utils/config';
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

  async function getVideos() {
    try {
      const { key } = config.youtube;
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
  }

  const handleFilters = (filters) => {
    const allFilters = 'vaporwave synthwave chillwave';
    if (filters === 'Show All') {
      setFilter(allFilters);
    } else if (filters && filters !== '') {
      setFilter(filters);
    }
    return true;
  };

  return (
    <SearchContext.Provider value={{ videos, filter, getVideos, handleFilters }}>
      {children}
    </SearchContext.Provider>
  );
}

export { useSearch };
export default SearchProvider;
