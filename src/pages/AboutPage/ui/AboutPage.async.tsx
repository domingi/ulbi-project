import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-expect-error: Временное решение для демонстрации работы Suspense
  setTimeout(() => resolve(import('./AboutPage')), 1000)
}));