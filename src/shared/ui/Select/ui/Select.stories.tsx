import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import { themeDecorator } from '~/shared/config/storybook/decorators/themeDecorator';
import { THEMES } from '~/app/providers/ThemeProvider';

const meta = {
  title: 'shared/Select',
  component: Select,
  tags: ['autodocs'],
  args: {
    label: 'Выбери что-нибудь',
    options: [{ value: "1", label: 'Пункт первый' }, { value: "2", label: 'Пункт второй' }],
    onChange: () => {},
    value: 'Пункт первый',
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SelectLight: Story = {};

export const SelectDark: Story = {
  decorators: [themeDecorator(THEMES.DARK)],
};
