import React from 'react';
import { render, screen } from '@testing-library/react';
import ThemeControlProvider from '../../providers/Theme';
import Switch from './index';

beforeEach(() => {
  render(
    <ThemeControlProvider>
      <Switch />
    </ThemeControlProvider>
  );
});

describe('Switch', () => {
  test('should contain a checkbox', () => {
    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeInTheDocument();
  });
});
