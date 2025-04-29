import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { themeDecorator } from '~/shared/config/storybook/decorators/themeDecorator';
import { THEMES } from '~/app/providers/ThemeProvider';

const meta = {
  title: 'shared/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    children: 'Модалка',
    isOpen: true,
    onClose: () => {},
  },
};

export const Dark: Story = {
  decorators: [themeDecorator(THEMES.DARK)],
  args: {
    children: 'Модалка',
    isOpen: true,
    onClose: () => {},
  },
};