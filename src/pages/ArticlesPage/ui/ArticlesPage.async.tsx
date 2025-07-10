import { lazy } from 'react';

export const ArticlesPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-expect-error: Временное решение для демонстрации работы Suspense
  setTimeout(() => resolve(import('./ArticlesPage')), 1000)
}));