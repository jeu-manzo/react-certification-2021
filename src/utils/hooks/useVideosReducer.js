import { useReducer } from 'react';
import videosMock from '../youtube-videos-mock';

export const useVideosReducer = () => {
  function reducer(state, action) {
    switch (action.type) {
      case 'SEARCH_VIDEOS': {
        return {
          ...state,
          videos: action.data.error ? videosMock.items : action.data.items,
        };
      }
      case 'VIDEO_BY_ID': {
        return {
          ...state,
          video: action.data.error ? videosMock.items : action.data.items,
        };
      }
      case 'RELATED_VIDEOS': {
        return {
          ...state,
          relatedVideos: action.data.error ? videosMock.items : action.data.items,
        };
      }
      case 'FAVORITE_VIDEOS': {
        return {
          ...state,
          favoriteVideos: action.data.error ? videosMock.items : action.data,
        };
      }
      case 'FILTERS': {
        return {
          ...state,
          filter: action.filter,
        };
      }
      default: {
        return state;
      }
    }
  }

  const initialState = {
    videos: [],
    video: [],
    relatedVideos: [],
    favoriteVideos: [],
    filter: 'vaporwave synthwave chillwave',
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return [state, dispatch];
};
