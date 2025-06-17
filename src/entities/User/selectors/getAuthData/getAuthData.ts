import { StoreScheme } from "~/app/providers/StoreProvider";

export const getAuthData = (state: StoreScheme) => state.user?.authData;
