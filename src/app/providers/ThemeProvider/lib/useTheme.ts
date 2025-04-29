import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, THEMES } from './constants';
import { ThemeContext } from './ThemeContext';

interface UseContextResult {
    theme: THEMES;
    toggleTheme: () => void;
}

export const useTheme = ():UseContextResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    setTheme(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    document.body.className = newTheme;
  };

  return {
    theme,
    toggleTheme,
  }

};
