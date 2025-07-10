import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-expect-error: Временное решение для демонстрации работы Suspense
  setTimeout(() => resolve(import('./ArticleDetailsPage')), 1000)
}));