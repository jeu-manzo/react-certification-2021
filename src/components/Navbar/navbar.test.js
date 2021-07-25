import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './index';

beforeEach(() => {
  render(<Navbar />);
});

describe('Navbar', () => {
  test('should have a logo', () => {
    const logo = screen.getByTitle(/logo/i);
    expect(logo).toBeInTheDocument();
  });

  test('should have a theme toggle', () => {
    const themeToggle = screen.getByTitle(/themetoggle/i);
    expect(themeToggle).toBeInTheDocument();
  });

  test('should have a search bar', () => {
    const searchBar = screen.getByTitle(/searchbar/i);
    expect(searchBar).toBeInTheDocument();
  });

  test('should have an avatar', () => {
    const avatar = screen.getByTitle(/avatar/i);
    expect(avatar).toBeInTheDocument();
  });
});
