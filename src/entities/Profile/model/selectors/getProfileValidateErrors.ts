import { StoreScheme } from "~/app/providers/StoreProvider";

export const getProfileValidateErrors = (state: StoreScheme) => state?.profile?.validateErrors;
