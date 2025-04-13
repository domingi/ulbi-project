import { FC } from 'react';
import { THEMES, useTheme } from '~/app/providers/ThemeProvider';
import { ThemeLightIcon } from '~/shared/assets/ThemeLightIcon';
import { ThemeDarkIcon } from '~/shared/assets/themeDarkIcon';
import { Button } from '../../Button/ui/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props: ThemeSwitcherProps) => {
  const { toggleTheme, theme } = useTheme();

  return (
    <Button onClick={toggleTheme}>
      {theme === THEMES.LIGHT ? <ThemeLightIcon /> : <ThemeDarkIcon />}
    </Button>
  );
};
