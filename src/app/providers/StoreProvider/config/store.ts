import { configureStore, DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from '~/entities/Counter';
import { StoreScheme } from './storeScheme';
import { userReducer } from '~/entities/User';
import { createReducerManager } from './reducerManager';

export type ReducersKeys = keyof StoreScheme;

export const createReduxStore = (initialState: StoreScheme, asyncReducers?: ReducersMapObject<StoreScheme>) => {
  const rootReducers: ReducersMapObject<StoreScheme> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);
  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

  // @ts-expect-error временное решение
  store.reducerManager = reducerManager;

  return store;
};
