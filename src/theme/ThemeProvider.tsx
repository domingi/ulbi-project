import { FC, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, THEMES } from './constants';
import { ThemeContext } from './ThemeContext';

const ThemeProvider: FC = ({ children }) => {
    const localStorageTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);

    const [theme, setTheme] = useState(localStorageTheme as THEMES || THEMES.LIGHT);
    
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
};

export default ThemeProvider;