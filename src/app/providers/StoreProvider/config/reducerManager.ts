import { AnyAction, combineReducers, Reducer, ReducersMapObject } from "@reduxjs/toolkit"
import { StoreScheme } from "./storeScheme"
import { ReducersKeys } from "./store"

export function createReducerManager(initialReducers: ReducersMapObject<StoreScheme>) {
  const reducers = { ...initialReducers }

  let combinedReducer = combineReducers(reducers)

  let keysToRemove: ReducersKeys[] = ['loginForm'];

  return {
    getReducerMap: () => reducers,
    reduce: (state: StoreScheme, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state };
        keysToRemove.forEach(key => delete state[key]);
        keysToRemove = []
      }
      return combinedReducer(state, action)
    },
    add: (key: ReducersKeys, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return
      }
      reducers[key] = reducer
      combinedReducer = combineReducers(reducers)
    },
    remove: (key: ReducersKeys) => {
      if (!key || !reducers[key]) {
        return
      }
      delete reducers[key]
      keysToRemove.push(key)
      combinedReducer = combineReducers(reducers)
    }
  }
};

export type IReducerManager = ReturnType<typeof createReducerManager>;