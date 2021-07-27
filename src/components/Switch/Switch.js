import React from 'react';
import { BsBrightnessHighFill } from 'react-icons/bs';

import {
  ThemeSwitch,
  ToggleContainer,
  ToggleCircle,
  ToggleButton,
} from './Switch.styled';

function Switch() {
  return (
    <ThemeSwitch data-testid="themeSwitch">
      <ToggleContainer />
      <ToggleCircle>
        <BsBrightnessHighFill />
      </ToggleCircle>
      <ToggleButton id="button" type="checkbox" aria-label="Toggle Button" />
    </ThemeSwitch>
  );
}

export default Switch;
