import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchProvider from '../../providers/Search';
import Content from './index';

beforeEach(() => {
  render(
    <SearchProvider>
      <Content />
    </SearchProvider>
  );
});

describe('Content', () => {
  test('should have videos', () => {
    const videos = screen.getByTestId(/videos/i);
    expect(videos).toBeInTheDocument();
  });
});
