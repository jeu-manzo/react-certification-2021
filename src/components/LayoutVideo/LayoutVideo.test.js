import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SearchProvider from '../../providers/Search';
import LayoutVideo from './index';

import videos from '../../utils/youtube-videos-mock';

beforeEach(() => {
  render(
    <BrowserRouter>
      <SearchProvider>
        <LayoutVideo videos={videos.items} />
      </SearchProvider>
    </BrowserRouter>
  );
});

describe('LayoutVideo', () => {
  test('should have an image', () => {
    const image = screen.getAllByRole('img')[0];
    expect(image).toBeInTheDocument();
  });

  test('should have title', () => {
    const title = screen.getAllByTestId('title')[0];
    expect(title).toBeInTheDocument();
  });

  test('should have channel title', () => {
    const channeTtitle = screen.getAllByTestId('channeltitle')[0];
    expect(channeTtitle).toBeInTheDocument();
  });
});
