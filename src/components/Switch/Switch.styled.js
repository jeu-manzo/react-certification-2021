import styled from 'styled-components';

export const ThemeSwitch = styled.div`
  touch-action: pan-x;
  display: inline-block;
  position: relative;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  padding: 0;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
`;

export const ToggleContainer = styled.div`
  width: 45px;
  height: 22px;
  padding: 0;
  border-radius: 30px;
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  transition: all 0.2s ease;
`;

export const ToggleCircle = styled.div`
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  position: absolute;
  top: 0px;
  left: ${({ theme }) => theme.toggleCirle};
  width: 27px;
  height: 26px;
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.toggleBackground};
  box-sizing: border-box;
  transition: all 0.25s ease;
  svg {
    position: absolute;
    top: 3px;
    left: 3px;
    font-size: 19px !important;
    margin: 0 !important;
    color: ${({ theme }) => theme.toggleColor} !important;
  }
`;

export const ToggleButton = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;
