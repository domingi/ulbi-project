import { CombinedState, configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from '~/entities/Counter';
import { StoreScheme } from './storeScheme';
import { userReducer } from '~/entities/User';
import { createReducerManager } from './reducerManager';
import { NavigateFunction } from 'react-router';
import { api } from '~/shared/api/api';

export type ReducersKeys = keyof StoreScheme;

export const createReduxStore = (
  initialState: StoreScheme,
  asyncReducers?: ReducersMapObject<StoreScheme>,
  navigate?: NavigateFunction,
) => {
  const rootReducers: ReducersMapObject<StoreScheme> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const extraArgument = {
    api,
    navigate,
  };

  const reducerManager = createReducerManager(rootReducers);
  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StoreScheme>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument
        },
      }),
  });

  // @ts-expect-error временное решение
  store.reducerManager = reducerManager;

  return store;
};
