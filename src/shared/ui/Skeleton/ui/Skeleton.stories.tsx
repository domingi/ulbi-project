import type { Meta, StoryObj } from '@storybook/react';
import { THEMES } from '~/app/providers/ThemeProvider';
import { themeDecorator } from '~/shared/config/storybook/decorators/themeDecorator';
import { Skeleton } from './Skeleton';

const meta = {
  title: 'shared/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    width: 50,
    height: 50,
  },
};

export const Circle: Story = {
  args: {
    width: 50,
    height: 50,
    borderRadius: '50%'
  },
};

export const MainDark: Story = {
  decorators: [themeDecorator(THEMES.DARK)],
  args: {
    width: 50,
    height: 50,
  },
};

