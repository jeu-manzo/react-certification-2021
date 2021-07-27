import React from 'react';
import { render, screen } from '@testing-library/react';
import Searchbar from './Searchbar';

beforeEach(() => {
  render(<Searchbar />);
});

describe('Searchbar', () => {
  test('should have an input', () => {
    const input = screen.getByPlaceholderText(/search/i);
    expect(input).toBeInTheDocument();
  });
});
