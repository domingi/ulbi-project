import { Reducer } from "@reduxjs/toolkit";
import { useDispatch, useStore } from "react-redux";
import { ReactNode, useEffect, FC } from "react";
import { ReduxStoreWithManager } from "~/app/providers/StoreProvider";
import { ReducersKeys } from "~/app/providers/StoreProvider/config/store";

interface DynamicModuleLoaderProps {
    children: ReactNode;
    reducerName: ReducersKeys;
    reducer: Reducer;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({ children, reducerName, reducer }) => {
  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    store.reducerManager.add(reducerName, reducer);
    dispatch({ type: `@ADD reducer ${reducerName}`})
    return () => {
      store.reducerManager.remove(reducerName);
      dispatch({ type: `@REMOVE reducer ${reducerName}`});
    }
  }, [])

  return (
    <>
      {children}
    </>
  );
}