import { createContext } from 'react';
import { THEMES } from './constants';

interface ThemeContextProps {
    theme?: THEMES,
    setTheme?: (theme: THEMES) => void,
}

export const ThemeContext = createContext<ThemeContextProps>({});