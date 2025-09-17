import React from 'react';
import { useThemeContext } from '../context/ThemeContext';
const ThemeSwitcher = () => {
  const { theme, themeSetter } = useThemeContext();

  const toggleTheme = () => {
    themeSetter(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'} mode
      </button>
    </>
  );
};
export default ThemeSwitcher;