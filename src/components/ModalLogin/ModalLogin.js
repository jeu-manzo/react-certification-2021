import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import { BsX, BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';

import { useAuth } from '../../providers/Auth/Auth.provider';

import {
  Modal,
  ModalDialog,
  TopRow,
  Header,
  Content,
  Fieldset,
  PasswordInput,
  ButtonImg,
  CreateAccount,
  ButtonSwitch,
  ButtonSign,
  ErrorMessage,
} from './ModalLogin.styled';

const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'root-modal');
document.body.appendChild(modalRoot);

function ModalLogin({ closeModal }) {
  const { signup, login } = useAuth();
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [isModalLogin, setIsModalLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();

  async function handleSignup(e) {
    e.preventDefault();
    setErrorMessage(null);
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
      closeModal();
      history.push('/');
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  async function handleLogin(e) {
    e.preventDefault();
    setErrorMessage(null);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
      closeModal();
      history.push('/');
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  return ReactDOM.createPortal(
    <Modal data-testid="modalLogin">
      <ModalDialog>
        <TopRow>
          <img src="logo.png" alt="logo-login" />
          <BsX onClick={closeModal} />
        </TopRow>
        <Header>
          <h1>Welcome to VideoWave</h1>
          {!isModalLogin ? <h2>Start enjoying the wave expierence</h2> : null}
        </Header>
        <Content>
          <Fieldset>
            <input type="email" placeholder="Email" ref={emailRef} required />
            <PasswordInput>
              <input
                type={visiblePassword ? 'text' : 'password'}
                placeholder="Password"
                ref={passwordRef}
                required
              />
              {visiblePassword ? (
                <BsEyeSlashFill
                  data-testid="hidePassword"
                  onClick={() => {
                    setVisiblePassword(!visiblePassword);
                  }}
                />
              ) : (
                <BsEyeFill
                  data-testid="showPassword"
                  onClick={() => {
                    setVisiblePassword(!visiblePassword);
                  }}
                />
              )}
            </PasswordInput>
            {isModalLogin ? <a href="/">Forgot your password?</a> : null}
            {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
            <ButtonSign type="button" onClick={isModalLogin ? handleLogin : handleSignup}>
              {isModalLogin ? 'Log In' : 'Sign Up'}
            </ButtonSign>
          </Fieldset>
          <p>or</p>
          <ButtonImg type="button">
            <img src="facebook-logo.svg" alt="logo-fb" />
            <p>Continue with Facebook</p>
          </ButtonImg>
          <ButtonImg type="button">
            <img src="google-logo.svg" alt="logo-google" />
            <p>Continue with Google</p>
          </ButtonImg>
          {isModalLogin ? (
            <CreateAccount>
              <p>Still not on VideoWave?</p>
              <ButtonSwitch
                type="button"
                onClick={() => {
                  setIsModalLogin(!isModalLogin);
                }}
              >
                Create an account
              </ButtonSwitch>
            </CreateAccount>
          ) : (
            <CreateAccount>
              <p>Already have an account?</p>
              <ButtonSwitch
                type="button"
                onClick={() => {
                  setIsModalLogin(!isModalLogin);
                }}
              >
                Log In
              </ButtonSwitch>
            </CreateAccount>
          )}
        </Content>
      </ModalDialog>
    </Modal>,
    document.getElementById('root-modal')
  );
}

export default ModalLogin;
