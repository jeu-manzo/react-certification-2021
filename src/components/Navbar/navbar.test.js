import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ThemeControlProvider from '../../providers/Theme';
import SearchProvider from '../../providers/Search';
import Navbar from './index';

beforeEach(() => {
  render(
    <ThemeControlProvider>
      <SearchProvider>
        <Navbar />
      </SearchProvider>
    </ThemeControlProvider>
  );
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

  test('should have a login button', () => {
    const buttonLogin = screen.getByTestId(/buttonLogin/i);
    expect(buttonLogin).toBeInTheDocument();
  });

  test('should have an icon button search', () => {
    const buttonSearch = screen.getByTestId(/button-search/i);
    expect(buttonSearch).toBeInTheDocument();
  });

  test('should have a small screen search bar', () => {
    const buttonSearch = screen.getByTestId(/button-search/i);
    fireEvent.click(buttonSearch);

    const searchbar = screen.getByTestId(/searchbar/i);
    expect(searchbar).toBeInTheDocument();

    const backButton = screen.getByTestId(/backButton/i);
    expect(backButton).toBeInTheDocument();

    fireEvent.click(backButton);
    const navbar = screen.getByTestId(/navbar/i);
    expect(navbar).toBeInTheDocument();
  });

  test('should open a login modal', () => {
    const buttonLogin = screen.getByTestId(/buttonLogin/i);
    fireEvent.click(buttonLogin);

    const modalLogin = screen.getByTestId(/modalLogin/i);
    expect(modalLogin).toBeInTheDocument();
  });
});
