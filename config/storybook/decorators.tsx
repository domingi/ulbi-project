import { ThemeProvider, useTheme } from '~/app/providers/ThemeProvider';
import classNames from '~/shared/lib/classNames/classNames';
import type { StoryContext, StoryFn } from '@storybook/react'
import '../../src/app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from '~/shared/config/i18n/i18nStorybook';
import { Suspense, useEffect } from 'react';

export const themeDecorator = (Story: StoryFn) => {
  const { theme } = useTheme();
  return (
    <ThemeProvider>
      <div className={classNames('app', {}, [theme])}>
        <Story />
      </div>
    </ThemeProvider>

  );
}
export  const i18nDecorator = (Story: StoryFn, context: StoryContext) => {
  const { locale } = context.globals;
  
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);
  return (
    <Suspense fallback={<div>loading translations...</div>}>
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  )
};
  
export const routerDecorator = (Story: StoryFn) => {
  return (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  )
};