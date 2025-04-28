import { StoreScheme } from "~/app/providers/StoreProvider";

export const getCounter = (state: StoreScheme) => state.counter;
