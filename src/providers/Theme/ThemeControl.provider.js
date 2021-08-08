import React, { useState, useContext, useEffect } from 'react';
import { light, dark } from './theme';

const ThemeContext = React.createContext(null);

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(`Can't use "useTheme" without a ThemeControlProvider!`);
  }
  return context;
}

function ThemeControlProvider({ children }) {
  const [theme, setTheme] = useState(light);

  const handleTheme = () => {
    if (theme.name === 'light') {
      window.localStorage.setItem('theme', JSON.stringify(dark));
      setTheme(dark);
    } else {
      window.localStorage.setItem('theme', JSON.stringify(light));
      setTheme(light);
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    const localThemeParsed = JSON.parse(localTheme);
    if (localThemeParsed) {
      setTheme(localThemeParsed);
    } else {
      window.localStorage.setItem('theme', JSON.stringify(light));
      setTheme(light);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { useTheme };
export default ThemeControlProvider;
