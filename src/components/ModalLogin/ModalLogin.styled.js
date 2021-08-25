import styled from 'styled-components';

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  background: ${({ theme }) => theme.modalBackground};
  overflow: auto;
`;

export const ModalDialog = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 700px;
  width: 484px;
  padding: 20px 10px 24px;
  background-color: ${({ theme }) => theme.body};
  border-radius: 8px;
  @media (max-width: 510px) {
    height: 100%;
    width: 100%;
  }
`;

export const TopRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
  margin-bottom: 8px;
  font-size: 30px;
  font-weight: 600;
  img {
    height: 50px;
  }
  svg {
    position: absolute;
    right: 16px;
    cursor: pointer;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px auto 18px;
  h1 {
    margin: 10px 0;
    font-size: 36px;
    font-weight: 300;
    text-align: center;
  }
  h2 {
    margin: 0 0 10px 0;
    font-size: 18px;
    font-weight: 300;
    text-align: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color};
  width: 268px;
  p {
    margin: 16px 0;
    font-weight: bold;
    text-align: center;
  }
`;

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  border: none;
  input {
    height: 48px;
    width: 100%;
    padding: 8px 16px;
    box-sizing: border-box;
    margin-bottom: 7px;
    border-radius: 15px;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.menuBorder};
    color: ${({ theme }) => theme.color};
    ::placeholder {
      color: ${({ theme }) => theme.color};
    }
    :focus {
      outline: none;
      box-shadow: 0 0 0 2px #4c33a9;
    }
  }
  a {
    font-size: 14px;
    text-decoration: none;
    color: ${({ theme }) => theme.color};
    margin: 5px;
  }
`;

export const PasswordInput = styled.div`
  width: 100%;
  position: relative;
  input {
    padding-right: 40px;
  }
  svg {
    position: absolute;
    right: 15px;
    top: 16px;
    cursor: pointer;
  }
`;

export const Button = styled.button`
  height: 40px;
  margin-top: 25px;
  border-radius: 20px;
  border: none;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.searchButtonBackground};
  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.searchBackground};
    transition: background-color 0.5s cubic-bezier(0.05, 0, 0, 1);
  }
`;

export const ButtonImg = styled(Button)`
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: 10px;
  img {
    height: 25px;
    margin-left: 5px;
  }
  p {
    width: 100%;
    align-items: center;
  }
`;

export const CreateAccount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin-top: 40px;
  }
`;

export const ButtonSwitch = styled(Button)`
  width: 150px;
  margin-top: 0;
`;
