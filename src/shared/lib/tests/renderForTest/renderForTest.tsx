import i18n from '~/shared/config/i18n/i18nTest';
import { I18nextProvider } from 'react-i18next';
import { ReactNode, Suspense } from 'react';
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import { StoreProvider, StoreScheme } from '~/app/providers/StoreProvider';

interface optionsProps {
  routes?: string[];
  initialState?: DeepPartial<StoreScheme>;
}

export const renderForTest = (component: ReactNode, options: optionsProps = {}) => {
  const { routes = ['/'], initialState } = options;

  return render(
    <MemoryRouter initialEntries={routes} initialIndex={0}>
      <StoreProvider initialState={initialState as StoreScheme}>
        <I18nextProvider i18n={i18n}>
          <Suspense fallback='loading'>
            {component}
          </Suspense>
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  )
};
