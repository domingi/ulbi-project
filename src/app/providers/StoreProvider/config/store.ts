import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from '~/entities/Counter';
import { StoreScheme } from './storeScheme';
import { userReducer } from '~/entities/User';
import { loginReducer } from '~/features/AuthByUsername';

export const createReduxStore = (initialState: StoreScheme) => {
  const rootReducers: ReducersMapObject<StoreScheme> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer,
  };

  return  configureStore<StoreScheme>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  })
};