import { lazy } from 'react';

export const ProfilePageAsync = lazy(() => new Promise((resolve) => {
  // @ts-expect-error: Временное решение для демонстрации работы Suspense
  setTimeout(() => resolve(import('./ProfilePage')), 1000)
}));