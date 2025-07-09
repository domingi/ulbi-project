import { StoreScheme } from "~/app/providers/StoreProvider";

export const getIsAuthInited = (state: StoreScheme) => state.user?.isInited;
