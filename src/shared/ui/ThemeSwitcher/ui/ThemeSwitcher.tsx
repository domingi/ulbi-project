import { FC } from 'react';
import { THEMES, useTheme } from '~/app/providers/ThemeProvider';
import { ThemeLightIcon } from '~/shared/assets/icons/ThemeLightIcon';
import { ThemeDarkIcon } from '~/shared/assets/icons/ThemeDarkIcon';
import { Button } from '../../Button/ui/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }: ThemeSwitcherProps) => {
  const { toggleTheme, theme } = useTheme();

  return (
    <Button onClick={toggleTheme} className={className}>
      {theme === THEMES.LIGHT ? <ThemeLightIcon /> : <ThemeDarkIcon />}
    </Button>
  );
};
