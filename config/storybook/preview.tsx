import type { Preview } from '@storybook/react'
import { i18nDecorator, routerDecorator, themeDecorator } from './decorators';
import '../../src/app/styles/index.scss';

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Сменить язык',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', title: 'English' },
        { value: 'ru', title: 'Russian' },
      ],
      showName: true,
    },
  },
};

const preview: Preview = {
  decorators: [i18nDecorator, routerDecorator, themeDecorator],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
