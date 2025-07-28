import { Reducer } from "@reduxjs/toolkit";
import { useDispatch, useStore } from "react-redux";
import { ReactNode, useEffect, FC } from "react";
import { ReduxStoreWithManager } from "~/app/providers/StoreProvider";
import { ReducersKeys } from "~/app/providers/StoreProvider/config/store";

type ReducersList = {
    [name in ReducersKeys]?: Reducer;
}
interface DynamicModuleLoaderProps {
    children: ReactNode;
    reducers: ReducersList;
    isRemove?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({ children, reducers, isRemove }) => {
  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as ReducersKeys, reducer);
      dispatch({ type: `@ADD reducer ${name}`});
    })

    if (isRemove) return () => {
      Object.keys(reducers).forEach((name) => {
        store.reducerManager.remove(name as ReducersKeys);
        dispatch({ type: `@REMOVE reducer ${name}`});
      })
    }
  }, [])

  return (
    <>
      {children}
    </>
  );
}