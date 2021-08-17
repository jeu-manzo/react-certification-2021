import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { delay, makeFetchResponse } from '../../utils/helpers';
import ThemeControlProvider from '../../providers/Theme';
import App from './index';
import mockVideos from '../../utils/youtube-videos-mock';

const waitFinisUpdating = async () => {
  const firstVideoImage = await screen.findByAltText(
    mockVideos.items[0].snippet.title,
    {},
    { timeout: 8000 }
  );
  expect(firstVideoImage).toBeInTheDocument();
};

describe('App', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(async () => {
      await delay(2);
      return makeFetchResponse(mockVideos);
    });

    render(
      <ThemeControlProvider>
        <App />
      </ThemeControlProvider>
    );
  });

  test('should have a navbar', async () => {
    const navbar = screen.getByTestId(/navbar/i);
    expect(navbar).toBeInTheDocument();
    await waitFinisUpdating();
  });

  test('should have a home view', async () => {
    const homepage = screen.getByTestId(/homepage/i);
    expect(homepage).toBeInTheDocument();

    await waitFinisUpdating();
  });

  test('should have search results', async () => {
    const input = screen.getByPlaceholderText(/search/i);
    fireEvent.change(input, { target: { value: 'vaporwave' } });

    const button = screen.getByTestId('searchButton');

    fireEvent.click(button);

    await waitFinisUpdating();

    const firstVideoTitle = await screen.findByText(mockVideos.items[0].snippet.title);
    expect(firstVideoTitle).toBeInTheDocument();

    const firstVideoChannelTitile = await screen.findByText(
      mockVideos.items[0].snippet.channelTitle
    );
    expect(firstVideoChannelTitile).toBeInTheDocument();
  });
});
