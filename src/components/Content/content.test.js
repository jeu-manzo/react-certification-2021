import React from 'react';
import { render, screen } from '@testing-library/react';
import AuthProvider from '../../providers/Auth/Auth.provider';
import SearchProvider from '../../providers/Search';
import Content from './index';

beforeEach(() => {
  render(
    <AuthProvider>
      <SearchProvider>
        <Content />
      </SearchProvider>
    </AuthProvider>
  );
});

describe('Content', () => {
  test('should have skeleton loader', () => {
    const skeletonLoader = screen.getByTestId(/skeletonLoader/i);
    expect(skeletonLoader).toBeInTheDocument();
  });
});
