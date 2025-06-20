import { StoreScheme } from "~/app/providers/StoreProvider";

export const getLoginUsername = (state: StoreScheme) => state?.loginForm?.username || '';
