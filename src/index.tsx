import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import { ThemeProvider } from './app/providers/ThemeProvider';
import '~/shared/config/i18n/i18n';
import { ErrorBoundary } from './app/providers/ErrorBoundary';
import { Suspense } from 'react';
import '~/app/styles/index.scss';
import { StoreProvider } from '~/app/providers/StoreProvider';

const initialState = {
  counter: { value: 0 },
  user: {},
}

render(
  <BrowserRouter>
    <StoreProvider initialState={initialState}>
      <ErrorBoundary>
        <ThemeProvider>
          <Suspense fallback="">
            <App />
          </Suspense>
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
