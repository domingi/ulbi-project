import type { Meta, StoryObj } from '@storybook/react';
import { THEMES } from '~/app/providers/ThemeProvider';
import { themeDecorator } from '~/shared/config/storybook/decorators/themeDecorator';
import { PageError } from './PageError';

const meta = {
  title: 'pages/PageError',
  component: PageError,
  tags: ['autodocs'],
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = {
  decorators: [themeDecorator(THEMES.DARK)],
};


