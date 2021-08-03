import React from 'react';
import { render, screen } from '@testing-library/react';

import SearchProvider from '../../providers/Search';
import Filter from './index';

beforeEach(() => {
  render(
    <SearchProvider>
      <Filter />
    </SearchProvider>
  );
});

describe('Filter', () => {
  test('should have button previous', () => {
    const previous = screen.getByTitle(/previous/i);
    expect(previous).toBeInTheDocument();
  });

  test('should have button next', () => {
    const next = screen.getByTitle(/next/i);
    expect(next).toBeInTheDocument();
  });
  test('should have filter text all', () => {
    const filterAll = screen.queryByText(/show all/i);
    expect(filterAll).toBeInTheDocument();
  });

  test('should have filter text chillwave', () => {
    const filterChillwave = screen.queryByText(/chillwave/i);
    expect(filterChillwave).toBeInTheDocument();
  });

  test('should have filter text vaporwave', () => {
    const filterVaporwave = screen.queryByText(/vaporwave/i);
    expect(filterVaporwave).toBeInTheDocument();
  });

  test('should have filter text synthwave', () => {
    const filterSynthwave = screen.queryByText(/synthwave/i);
    expect(filterSynthwave).toBeInTheDocument();
  });

  test('should have filter text new wave', () => {
    const filterNewWave = screen.queryByText(/new wave/i);
    expect(filterNewWave).toBeInTheDocument();
  });

  test('should have filter text retro wave', () => {
    const filterRetroWave = screen.queryByText(/retro wave/i);
    expect(filterRetroWave).toBeInTheDocument();
  });

  test('should have filter text dream wave', () => {
    const filterDreamWave = screen.queryByText(/dream wave/i);
    expect(filterDreamWave).toBeInTheDocument();
  });

  test('should have filter text fashwave', () => {
    const filterFashwave = screen.queryByText(/fashwave/i);
    expect(filterFashwave).toBeInTheDocument();
  });

  test('should have filter text dark wave', () => {
    const filterDarkWave = screen.queryByText(/dark wave/i);
    expect(filterDarkWave).toBeInTheDocument();
  });

  test('should have filter text ethereal wave', () => {
    const filterEtherealWave = screen.queryByText(/ethereal wave/i);
    expect(filterEtherealWave).toBeInTheDocument();
  });

  test('should have filter text cold wave', () => {
    const filterColdWave = screen.queryByText(/cold wave/i);
    expect(filterColdWave).toBeInTheDocument();
  });

  test('should have filter text lofi', () => {
    const filterLofi = screen.queryByText(/lo-fi/i);
    expect(filterLofi).toBeInTheDocument();
  });

  test('should have filter text city pop', () => {
    const filterCityPop = screen.queryByText(/city pop/i);
    expect(filterCityPop).toBeInTheDocument();
  });

  test('should have filter text mall soft', () => {
    const filterMallsoft = screen.queryByText(/mallsoft/i);
    expect(filterMallsoft).toBeInTheDocument();
  });

  test('should have filter text future funk', () => {
    const filterFutureFunk = screen.queryByText(/future funk/i);
    expect(filterFutureFunk).toBeInTheDocument();
  });

  test('should have filter text hardvapour', () => {
    const filterHardvapour = screen.queryByText(/hardvapour/i);
    expect(filterHardvapour).toBeInTheDocument();
  });

  test('should have filter text witch house', () => {
    const filterWitchHouse = screen.queryByText(/witch house/i);
    expect(filterWitchHouse).toBeInTheDocument();
  });
});
