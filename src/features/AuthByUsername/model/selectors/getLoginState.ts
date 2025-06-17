import { StoreScheme } from "~/app/providers/StoreProvider";

export const getLoginState = (state: StoreScheme) => state.loginForm;
