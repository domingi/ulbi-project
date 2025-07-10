import { Provider } from 'react-redux'
import { FC, ReactNode, useMemo } from "react";
import { createReduxStore } from '../config/store';
import { StoreScheme } from '../config/storeScheme';
import { ReducersMapObject } from 'redux';
import { useNavigate } from 'react-router';

interface StoreProviderProps {
  children: ReactNode;
  initialState: StoreScheme;
  asyncReducers?: ReducersMapObject<StoreScheme>;
}

export const StoreProvider: FC<StoreProviderProps> = ({ children, initialState, asyncReducers }) => {
  const navigate = useMemo(() => useNavigate, []);
  const store = createReduxStore(initialState, asyncReducers, navigate);
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};