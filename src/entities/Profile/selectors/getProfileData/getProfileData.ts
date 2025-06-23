import { StoreScheme } from "~/app/providers/StoreProvider";

export const getProfileData = (state: StoreScheme) => state?.profile?.data;
