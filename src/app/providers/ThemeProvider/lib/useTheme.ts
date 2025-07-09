import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, THEMES } from './constants';
import { ThemeContext } from './ThemeContext';

interface UseContextResult {
    theme: THEMES;
    toggleTheme: () => void;
}

export const useTheme = (): UseContextResult => {
  const { theme = THEMES.LIGHT, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme;
    switch (theme) {
    case THEMES.LIGHT:
      newTheme = THEMES.VIOLET;
      break;
    case THEMES.VIOLET:
      newTheme = THEMES.DARK;
      break;
    case THEMES.DARK:
      newTheme = THEMES.LIGHT;
      break;
    default:
      newTheme = THEMES.LIGHT;

    }
    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    document.body.className = newTheme;
  };

  return {
    theme,
    toggleTheme,
  }

};
