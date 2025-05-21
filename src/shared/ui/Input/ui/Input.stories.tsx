import type { Meta, StoryObj } from '@storybook/react';
import { THEMES } from '~/app/providers/ThemeProvider';
import { themeDecorator } from '~/shared/config/storybook/decorators/themeDecorator';
import { Input } from './Input';

const meta = {
  title: 'shared/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    placeholder: 'Суперполе',
  }
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [themeDecorator(THEMES.DARK)],
};
