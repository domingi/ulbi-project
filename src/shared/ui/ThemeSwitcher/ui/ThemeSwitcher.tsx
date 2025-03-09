import { FC } from 'react';
import { THEMES, useTheme } from '~/app/providers/ThemeProvider';
import LightIcon from '~/shared/assets/themeLightIcon.svg';
import DarkIcon from '~/shared/assets/themeDarkIcon.svg';
import { Button } from '../../Button/ui/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props: ThemeSwitcherProps) => {
    const { toggleTheme, theme } = useTheme();

    return (
        <Button onClick={toggleTheme}>
            {theme === THEMES.LIGHT ? <LightIcon /> : <DarkIcon />}
        </Button>
    );
};
