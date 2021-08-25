import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BsX, BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';

import {
  Modal,
  ModalDialog,
  TopRow,
  Header,
  Content,
  Fieldset,
  PasswordInput,
  Button,
  ButtonImg,
  CreateAccount,
  ButtonSwitch,
} from './ModalLogin.styled';

const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'root-modal');
document.body.appendChild(modalRoot);

function ModalLogin({ closeModal }) {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [isModalLogin, setIsModalLogin] = useState(true);

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
            <input type="email" placeholder="Email" />
            <PasswordInput>
              <input
                type={visiblePassword ? 'text' : 'password'}
                placeholder="Password"
              />
              {visiblePassword ? (
                <BsEyeSlashFill
                  onClick={() => {
                    setVisiblePassword(!visiblePassword);
                  }}
                />
              ) : (
                <BsEyeFill
                  onClick={() => {
                    setVisiblePassword(!visiblePassword);
                  }}
                />
              )}
            </PasswordInput>
            {isModalLogin ? <a href="/">Forgot your password?</a> : null}
            <Button type="button">{isModalLogin ? 'Log In' : 'Sign Up'}</Button>
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
              <p>Do you have an account?</p>
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
