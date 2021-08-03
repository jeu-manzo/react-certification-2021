import { useState, useEffect } from 'react';

import config from '../config';
import videosMock from '../youtube-videos-mock';

const API_URL = 'https://www.googleapis.com/youtube/v3/search';

function useRelatedVideos(videoId) {
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    async function getRelatedVideos() {
      try {
        const { key } = config.youtube;
        const res = await fetch(
          `${API_URL}?part=snippet&maxResults=50&type=video&relatedToVideoId=${videoId}&key=${key}`
        );
        const data = await res.json();
        if (!data.error) {
          setRelatedVideos(data.items);
        } else {
          setRelatedVideos(videosMock.items);
        }
      } catch (error) {
        setRelatedVideos(videosMock.items);
        console.error('Error: ', error);
      }
    }
    getRelatedVideos();
  }, [videoId]);

  return { relatedVideos };
}

export { useRelatedVideos };
