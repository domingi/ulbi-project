import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-expect-error: Временное решение для демонстрации работы Suspense
  setTimeout(() => resolve(import('./MainPage')), 1000)
}));