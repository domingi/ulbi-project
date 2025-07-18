import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { THEMES } from '~/app/providers/ThemeProvider';
import { themeDecorator } from '~/shared/config/storybook/decorators/themeDecorator';
import { LoginForm } from './LoginForm';

const meta = {
  title: 'featured/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  args: {
    onSuccess: fn(),
  }
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [themeDecorator(THEMES.DARK)],
};
