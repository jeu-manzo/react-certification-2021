import React from 'react';
import { BsBrightnessHighFill, BsMoon } from 'react-icons/bs';

import { useTheme } from '../../providers/Theme';
import {
  ThemeSwitch,
  ToggleContainer,
  ToggleCircle,
  ToggleButton,
} from './Switch.styled';

function Switch() {
  const { theme, handleTheme } = useTheme();

  return (
    <ThemeSwitch data-testid="themeSwitch" onClick={handleTheme}>
      <ToggleContainer />
      <ToggleCircle dark={theme}>
        {theme.name === 'dark' ? <BsMoon /> : <BsBrightnessHighFill />}
      </ToggleCircle>
      <ToggleButton id="button" type="checkbox" aria-label="Toggle Button" />
    </ThemeSwitch>
  );
}

export default Switch;
