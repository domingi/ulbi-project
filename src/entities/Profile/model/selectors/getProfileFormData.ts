import { StoreScheme } from "~/app/providers/StoreProvider";

export const getProfileFormData = (state: StoreScheme) => state?.profile?.formData;
