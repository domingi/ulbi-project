import { StoreScheme } from "~/app/providers/StoreProvider";

export const getLoginPassword = (state: StoreScheme) => state?.loginForm?.password || '';
