import { StoreScheme } from "~/app/providers/StoreProvider";

export const getLoginIsLoading = (state: StoreScheme) => state?.loginForm?.isLoading || false;
