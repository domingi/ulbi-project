import { EnhancedStore } from "@reduxjs/toolkit";
import { CounterSchema } from "~/entities/Counter";
import { UserSchema } from "~/entities/User";
import { LoginSchema } from "~/features/AuthByUsername";
import { IReducerManager } from "./reducerManager";

export interface StoreScheme {
    counter: CounterSchema;
    user: UserSchema;

    // async reducers
    loginForm?: LoginSchema;
}

export interface ReduxStoreWithManager extends EnhancedStore {
    reducerManager: IReducerManager;
}