import { StoreScheme } from "~/app/providers/StoreProvider";

export const getProfileIsLoading = (state: StoreScheme) => state?.profile?.isLoading;
