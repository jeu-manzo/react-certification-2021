import styled from 'styled-components';

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 0;
  position: absolute;
  min-height: 150px;
  width: 250px;
  top: 60px;
  right: 10px;
  z-index: 1;
  border: 1px solid ${({ theme }) => theme.menuBorder};
  border-top: none;
  background-color: ${({ theme }) => theme.body};
  p {
    width: 95%;
    padding: 20px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    word-wrap: break-word;
  }
`;

export const MenuOption = styled.button`
  display: flex;
  align-items: center;
  height: 20px;
  width: 100%;
  padding: 20px;
  background-color: transparent;
  color: ${({ theme }) => theme.color};
  border: none;
  cursor: pointer;
  font-size: 16px;
  :hover {
    background-color: ${({ theme }) => theme.menuBackground};
  }
  svg {
    margin-right: 15px;
    font-size: 20px;
  }
  a {
    display: flex;
    align-items: center;
    background-color: transparent;
    color: ${({ theme }) => theme.color};
    text-decoration: none;
  }
`;
