import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ThemeControlProvider from '../../providers/Theme';
import AuthProvider from '../../providers/Auth/Auth.provider';
import SearchProvider from '../../providers/Search';
import Navbar from './index';

beforeEach(async () => {
  render(
    <ThemeControlProvider>
      <AuthProvider>
        <BrowserRouter>
          <SearchProvider>
            <Navbar />
          </SearchProvider>
        </BrowserRouter>
      </AuthProvider>
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

  test('should have a profile', async () => {
    const profile = screen.getByTestId(/profile/i);
    expect(profile).toBeInTheDocument();
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

  test('should open a manu account', () => {
    const profile = screen.getByTestId(/profile/i);
    fireEvent.click(profile);

    const menuAccount = screen.getByTestId(/menuAccount/i);
    expect(menuAccount).toBeInTheDocument();

    const email = screen.getByText(/test@email.com/i);
    expect(email).toBeInTheDocument();

    const optionFavoriteVideos = screen.getByTestId(/optionFavoriteVideos/i);
    expect(optionFavoriteVideos).toBeInTheDocument();

    const optionLogout = screen.getByTestId(/optionLogout/i);
    expect(optionLogout).toBeInTheDocument();
  });
});
