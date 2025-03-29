import i18n from '~/shared/config/i18n/i18nTest';
import { I18nextProvider } from 'react-i18next';
import { ReactNode } from 'react';
import { render } from '@testing-library/react'

export const renderWithTranslations = (component: ReactNode) => {
  return render(
    <I18nextProvider i18n={i18n}>
      {component}
    </I18nextProvider>
  )
};
