import React from 'react';
import { render, screen } from '@testing-library/react';
import Logo from './index';

beforeEach(() => {
  render(<Logo />);
});

describe('Logo', () => {
  test('should have an img', () => {
    const logo = screen.getByAltText(/logo/i);
    expect(logo).toBeInTheDocument();
  });

  test('should have in logo text videowave', () => {
    const textLogo = screen.queryByText(/videowave/i);
    expect(textLogo).toBeInTheDocument();
  });
});
