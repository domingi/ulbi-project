import type { Meta, StoryObj } from '@storybook/react';
import { CountrySelect } from './CountrySelect';
import { themeDecorator } from '~/shared/config/storybook/decorators/themeDecorator';
import { THEMES } from '~/app/providers/ThemeProvider';

const meta = {
  title: 'entities/CountrySelect',
  component: CountrySelect,
  tags: ['autodocs'],
} satisfies Meta<typeof CountrySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CountrySelectLight: Story = {};

export const CountrySelectDark: Story = {
  decorators: [themeDecorator(THEMES.DARK)],
};
