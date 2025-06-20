import { Provider } from 'react-redux'
import { FC, ReactNode } from "react";
import { createReduxStore } from '../config/store';
import { StoreScheme } from '../config/storeScheme';
import { ReducersMapObject } from 'redux';

interface StoreProviderProps {
  children: ReactNode;
  initialState: StoreScheme;
  asyncReducers?: ReducersMapObject<StoreScheme>;
}

export const StoreProvider: FC<StoreProviderProps> = ({ children, initialState, asyncReducers }) => {
  const store = createReduxStore(initialState, asyncReducers);
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};