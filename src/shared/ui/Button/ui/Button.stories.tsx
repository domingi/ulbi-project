import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { THEMES } from '~/app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';
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

export const ClearInverted: Story = {
  args: {
    children: 'Кнопка',
    theme: ButtonTheme.CLEAR_INVERTED,
  },
};

export const Outline: Story = {
  args: {
    children: 'Кнопка',
    theme: ButtonTheme.OUTLINE,
  },
};

export const OutlineSizeL: Story = {
  args: {
    children: 'Кнопка',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L
  },
};

export const OutlineSizeXL: Story = {
  args: {
    children: 'Кнопка',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL
  },
};

export const OutlineDark: Story = {
  decorators: [themeDecorator(THEMES.DARK)],
  args: {
    children: 'Кнопка',
    theme: ButtonTheme.OUTLINE,
  },
};

export const Background: Story = {
  args: {
    children: 'Кнопка',
    theme: ButtonTheme.BACKGROUND,
  },
};

export const BackgroundInverted: Story = {
  args: {
    children: 'Кнопка',
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
};

export const Square: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
  },
};

export const SquareSizeL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L
  },
};

export const SquareSizeXL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL
  },
};