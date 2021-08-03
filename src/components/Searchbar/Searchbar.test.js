import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchProvider from '../../providers/Search';
import Searchbar from './Searchbar';

beforeEach(() => {
  render(
    <SearchProvider>
      <Searchbar />
    </SearchProvider>
  );
});

describe('Searchbar', () => {
  test('should have an input', () => {
    const input = screen.getByPlaceholderText(/search/i);
    expect(input).toBeInTheDocument();
  });
});
