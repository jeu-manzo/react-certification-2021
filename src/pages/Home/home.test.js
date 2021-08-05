import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchProvider from '../../providers/Search';
import Home from './index';

beforeEach(() => {
  render(
    <SearchProvider>
      <Home />
    </SearchProvider>
  );
});

describe('Home', () => {
  test('should have filters', () => {
    const filters = screen.getByTestId(/filters/i);
    expect(filters).toBeInTheDocument();
  });

  test('should have content', () => {
    const content = screen.getByTestId(/content/i);
    expect(content).toBeInTheDocument();
  });
});
