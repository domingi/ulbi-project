import { EnhancedStore } from "@reduxjs/toolkit";
import { CounterSchema } from "~/entities/Counter";
import { UserSchema } from "~/entities/User";
import { LoginSchema } from "~/features/AuthByUsername";
import { createReduxStore } from "./store";
import { IReducerManager } from "./reducerManager";
import { ProfileSchema } from "~/entities/Profile";

export interface StoreScheme {
    counter: CounterSchema;
    user: UserSchema;

    // async reducers
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
}

export interface ReduxStoreWithManager extends EnhancedStore {
    reducerManager: IReducerManager;
}

export type AppDispatch =  ReturnType<typeof createReduxStore>['dispatch'];