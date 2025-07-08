import { StoreScheme } from "~/app/providers/StoreProvider";

export const getProfileError = (state: StoreScheme) => state?.profile?.error;
