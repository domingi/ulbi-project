import { StoreScheme } from "~/app/providers/StoreProvider";

export const getArticleData = (state: StoreScheme) => state?.article?.data;
export const getArticleError = (state: StoreScheme) => state?.article?.error;
export const getArticleIsLoading = (state: StoreScheme) => state?.article?.isLoading;
