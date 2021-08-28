import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { delay, makeFetchResponse } from '../../utils/helpers';
import AuthProvider from '../../providers/Auth/Auth.provider';
import SearchProvider from '../../providers/Search';
import VideoDetail from './index';
import videoDetailMock from '../../utils/youtube-video-detail-mock';
import videosMock from '../../utils/youtube-videos-mock';

describe('VideoDetail', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(async (url) => {
      if (url.includes('relatedToVideoId')) {
        await delay(1);
        return makeFetchResponse(videosMock);
      }
      await delay(1);
      return makeFetchResponse(videoDetailMock);
    });

    const history = createMemoryHistory();
    history.push('/VideoDetail/Z-c6Mp3ZJCA');

    render(
      <AuthProvider>
        <SearchProvider>
          <Router history={history}>
            <VideoDetail />
          </Router>
        </SearchProvider>
      </AuthProvider>
    );
  });

  test('should have an iframe', async () => {
    const iframe = await screen.findByTitle(videoDetailMock.items[0].snippet.title);
    expect(iframe).toBeInTheDocument();
  });

  test('should have a title', async () => {
    const title = await screen.findByTestId(videoDetailMock.items[0].snippet.title);
    expect(title).toBeInTheDocument();
  });

  test('should have an channel title', async () => {
    const channelTitle = await screen.findByTestId(
      videoDetailMock.items[0].snippet.channelTitle
    );
    expect(channelTitle).toBeInTheDocument();
  });
});
