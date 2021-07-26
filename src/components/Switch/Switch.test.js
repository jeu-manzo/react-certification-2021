import React from 'react';
import { render, screen } from '@testing-library/react';
import Switch from './index';

beforeEach(() => {
  render(<Switch />);
});

describe('Switch', () => {
  test('should contain a checkbox', () => {
    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeInTheDocument();
  });
});
