import type { Meta, StoryObj } from '@storybook/react';
import { THEMES } from '~/app/providers/ThemeProvider';
import { themeDecorator } from '~/shared/config/storybook/decorators/themeDecorator';
import { ThemeSwitcher } from './ThemeSwitcher';

const meta = {
  title: 'shared/ThemeSwitcher',
  component: ThemeSwitcher,
  tags: ['autodocs'],
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [themeDecorator(THEMES.DARK)],
};
