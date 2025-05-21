import { CounterSchema } from "~/entities/Counter";
import { UserSchema } from "~/entities/User";

export interface StoreScheme {
    counter: CounterSchema;
    user: UserSchema;
}