import type { Meta, StoryObj } from '@storybook/react';
import { THEMES } from '~/app/providers/ThemeProvider';
import { themeDecorator } from '~/shared/config/storybook/decorators/themeDecorator';
import { AppLink, APP_LINK_THEME } from './AppLink';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  args: {
    to: '/'
  }
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    children: 'Ссылка',
    theme: APP_LINK_THEME.MAIN,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Ссылка',
    theme: APP_LINK_THEME.SECONDARY,
  },
};

export const MainDark: Story = {
  decorators: [themeDecorator(THEMES.DARK)],
  args: {
    children: 'Ссылка',
    theme: APP_LINK_THEME.MAIN,
  },
};

export const SecondaryDark: Story = {
  decorators: [themeDecorator(THEMES.DARK)],
  args: {
    children: 'Ссылка',
    theme: APP_LINK_THEME.SECONDARY,
  },
};

