import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import SearchProvider from '../../providers/Search';
import VideoDetail from './index';
import videosMock from '../../utils/youtube-videos-mock';

beforeEach(() => {
  const history = createMemoryHistory();
  const state = { videoDetail: videosMock.items[0] };
  history.push('/VideoDetail/wOMwO5T3yT4', state);

  render(
    <SearchProvider>
      <Router history={history}>
        <VideoDetail />
      </Router>
    </SearchProvider>
  );
});

describe('VideoDetail', () => {
  test('should have an iframe', () => {
    const iframe = screen.getByTitle(videosMock.items[0].snippet.title);
    expect(iframe).toBeInTheDocument();
  });

  test('should have an title', () => {
    const title = screen.getByText(videosMock.items[0].snippet.title);
    expect(title).toBeInTheDocument();
  });

  test('should have an channel title', () => {
    const channelTitle = screen.getByText(videosMock.items[0].snippet.channelTitle);
    expect(channelTitle).toBeInTheDocument();
  });
});
