import { lazy } from 'react';

export const CounterPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./CounterPage')), 1000)
}));