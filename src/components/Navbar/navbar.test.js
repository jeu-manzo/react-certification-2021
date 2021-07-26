import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './index';

beforeEach(() => {
  render(<Navbar />);
});

describe('Navbar', () => {
  test('should have a logo', () => {
    const logo = screen.getByTestId(/logo/i);
    expect(logo).toBeInTheDocument();
  });

  test('should have a theme switch', () => {
    const themeSwitch = screen.getByTestId(/themeswitch/i);
    expect(themeSwitch).toBeInTheDocument();
  });

  test('should have a search bar', () => {
    const searchBar = screen.getByTestId(/searchbar/i);
    expect(searchBar).toBeInTheDocument();
  });

  test('should have an avatar', () => {
    const avatar = screen.getByTestId(/avatar/i);
    expect(avatar).toBeInTheDocument();
  });
});
