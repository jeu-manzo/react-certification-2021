import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './index';

beforeEach(() => {
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
});
