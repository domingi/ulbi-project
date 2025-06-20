import { StoreScheme } from "~/app/providers/StoreProvider";

export const getLoginError = (state: StoreScheme) => state?.loginForm?.error || '';
