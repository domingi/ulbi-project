import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { THEMES } from '~/app/providers/ThemeProvider';
import { themeDecorator } from '~/shared/config/storybook/decorators/themeDecorator';
import { ProfileCard } from './ProfileCard';
import { CURRENCY } from '~/entities/Currency';
import { COUNTRY } from '~/entities/Country';

const mockedProfile = {
  first: "Stanislav",
  lastName: "Gribanov",
  age: "35",
  currency: CURRENCY.RUB,
  country: COUNTRY.RUSSIA,
  city: "Ekaterinburg",
  username: "stas",
  avatar: "https://avatarzo.ru/wp-content/uploads/naruto-uzumaki.jpg"
};

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  tags: ['autodocs'],
  args: {
    data: mockedProfile,
  }
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [themeDecorator(THEMES.DARK)],
};

export const Loading: Story = {
  args: {
    isLoading: true,
  }
};

export const WithError: Story = {
  args: {
    error: 'ops',
  }
};