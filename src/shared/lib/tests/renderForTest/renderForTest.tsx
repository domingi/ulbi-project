import i18n from '~/shared/config/i18n/i18nTest';
import { I18nextProvider } from 'react-i18next';
import { ReactNode } from 'react';
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';

interface optionsProps {
  routes?: string[];
}

export const renderForTest = (component: ReactNode, options: optionsProps = {}) => {
  const { routes = ['/'] } = options;

  return render(
    <MemoryRouter initialEntries={routes} initialIndex={0}>
      <I18nextProvider i18n={i18n}>
        {component}
      </I18nextProvider>
    </MemoryRouter>
  )
};
