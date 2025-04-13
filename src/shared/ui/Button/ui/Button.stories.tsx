import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { THEMES } from '~/app/providers/ThemeProvider';
import { Button, ButtonTheme } from './Button';
import { themeDecorator } from '~/shared/config/storybook/decorators/themeDecorator';

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    theme: ButtonTheme,
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
  args: {
    children: 'Кнопка',
    theme: ButtonTheme.CLEAR,
  },
};

export const Outline: Story = {
  args: {
    children: 'Кнопка',
    theme: ButtonTheme.OUTLINE,
  },
};

export const OutlineDark: Story = {
  decorators: [themeDecorator(THEMES.DARK)],
  args: {
    children: 'Кнопка',
    theme: ButtonTheme.OUTLINE,
  },
};
