import type { Meta, StoryObj } from '@storybook/react';
import { THEMES } from '~/app/providers/ThemeProvider';
import { themeDecorator } from '~/shared/config/storybook/decorators/themeDecorator';
import { Text, TextTheme } from './Text';

const meta = {
  title: 'shared/Text',
  component: Text,
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TitleLight: Story = {
  args: {
    title: 'Title lalala'
  }
};

export const TitleDark: Story = {
  decorators: [themeDecorator(THEMES.DARK)],
  args: {
    title: 'Title lalala'
  }
};

export const TextLight: Story = {
  args: {
    text: 'text lalala'
  }
};

export const TextDark: Story = {
  decorators: [themeDecorator(THEMES.DARK)],
  args: {
    text: 'text lalala'
  }
};

export const TextError: Story = {
  args: {
    title: 'Title lalala',
    text: 'OMG! Its error!',
    theme: TextTheme.ERROR
  }
};