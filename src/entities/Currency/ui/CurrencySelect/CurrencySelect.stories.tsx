import type { Meta, StoryObj } from '@storybook/react';
import { CurrencySelect } from './CurrencySelect';
import { themeDecorator } from '~/shared/config/storybook/decorators/themeDecorator';
import { THEMES } from '~/app/providers/ThemeProvider';
import { CURRENCY } from '../../model/types';

const meta = {
  title: 'entities/CurrencySelect',
  component: CurrencySelect,
  tags: ['autodocs'],
  args: {
    onChange: () => {},
    value: CURRENCY.RUB,
  },
} satisfies Meta<typeof CurrencySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CurrencySelectLight: Story = {};

export const CurrencySelectDark: Story = {
  decorators: [themeDecorator(THEMES.DARK)],
};
