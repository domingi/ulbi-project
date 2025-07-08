import { StoreScheme } from "~/app/providers/StoreProvider";

export const getProfileReadonly = (state: StoreScheme) => state?.profile?.readonly;
