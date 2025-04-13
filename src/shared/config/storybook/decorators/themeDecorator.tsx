import type { StoryFn } from '@storybook/react';
import { THEMES } from '~/app/providers/ThemeProvider';
import classNames from '~/shared/lib/classNames/classNames';

export const themeDecorator = (theme: THEMES) => (Story: StoryFn) => (
  <div className={classNames('app', {}, [theme])}>
    <Story />
  </div>
);