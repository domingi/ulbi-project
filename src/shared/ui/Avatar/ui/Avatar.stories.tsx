import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta = {
  title: 'shared/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    path: 'https://developer.mozilla.org/static/media/mdn_contributor.14a24dcfda486f000754.png',
    alt: 'Аватар'
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {};

