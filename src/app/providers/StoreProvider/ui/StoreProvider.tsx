import { Provider } from 'react-redux'
import { FC, ReactNode } from "react";
import { createReduxStore } from '../config/store';
import { StoreScheme } from '../config/storeScheme';

interface StoreProviderProps {
  children: ReactNode;
  initialState: StoreScheme; 
}

export const StoreProvider: FC<StoreProviderProps> = ({ children, initialState }) => {
  const store = createReduxStore(initialState);
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};