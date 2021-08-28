import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AuthProvider from '../../providers/Auth/Auth.provider';
import ModalLogin from './ModalLogin';

beforeEach(async () => {
  render(
    <AuthProvider>
      <ModalLogin />
    </AuthProvider>
  );
});

describe('Modal', () => {
  test('should have a modal login', () => {
    const welcome = screen.getByText(/Welcome to VideoWave/i);
    expect(welcome).toBeInTheDocument();

    const email = screen.getByPlaceholderText(/Email/i);
    expect(email).toBeInTheDocument();

    const password = screen.getByPlaceholderText(/password/i);
    expect(password).toBeInTheDocument();

    const showPassword = screen.getByTestId(/showPassword/i);
    expect(showPassword).toBeInTheDocument();
    fireEvent.click(showPassword);

    const hidePassword = screen.getByTestId(/hidePassword/i);
    expect(hidePassword).toBeInTheDocument();

    const forgotPassword = screen.getByText(/Forgot your password/i);
    expect(forgotPassword).toBeInTheDocument();

    const login = screen.getByText(/log in/i);
    expect(login).toBeInTheDocument();

    const continueFb = screen.getByText(/Continue with Facebook/i);
    expect(continueFb).toBeInTheDocument();

    const continueGoogle = screen.getByText(/Continue with Google/i);
    expect(continueGoogle).toBeInTheDocument();

    const createAccount = screen.getByText(/Create an account/i);
    expect(createAccount).toBeInTheDocument();
  });

  test('should have a modal create account', () => {
    const createAccount = screen.getByText(/Create an account/i);
    fireEvent.click(createAccount);

    const subtitle = screen.getByText(/Start enjoying the wave expierence/i);
    expect(subtitle).toBeInTheDocument();

    const signup = screen.getByText(/Sign Up/i);
    expect(signup).toBeInTheDocument();

    const login = screen.getByText(/Already have an account/i);
    expect(login).toBeInTheDocument();
  });
});
