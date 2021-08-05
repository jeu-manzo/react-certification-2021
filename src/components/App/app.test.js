import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './index';
import mockVideos from '../../utils/youtube-videos-mock';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockVideos),
  })
);

beforeEach(() => {
  fetch.mockClear();
  render(<App />);
});

describe('App', () => {
  test('should have a navbar', () => {
    const navbar = screen.getByTestId(/navbar/i);
    expect(navbar).toBeInTheDocument();
  });

  test('should have a home view', () => {
    const homepage = screen.getByTestId(/homepage/i);
    expect(homepage).toBeInTheDocument();
  });

  test('should have search results', async () => {
    const input = screen.getByPlaceholderText(/search/i);
    fireEvent.change(input, { target: { value: 'vaporwave' } });

    const button = screen.getByTestId('searchButton');
    fireEvent.click(button);

    const firstVideoImage = await screen.findByAltText(mockVideos.items[0].snippet.title);
    expect(firstVideoImage).toBeInTheDocument();

    const firstVideoTitle = await screen.findByText(mockVideos.items[0].snippet.title);
    expect(firstVideoTitle).toBeInTheDocument();

    const firstVideoChannelTitile = await screen.findByText(
      mockVideos.items[0].snippet.channelTitle
    );
    expect(firstVideoChannelTitile).toBeInTheDocument();
  });
});
