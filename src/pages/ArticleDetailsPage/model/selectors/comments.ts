import { StoreScheme } from "~/app/providers/StoreProvider";

export const getArticleCommentsError = (state: StoreScheme) => state?.articleComments?.error || '';
export const getArticleCommentsIsLoading = (state: StoreScheme) => state?.articleComments?.isLoading || false;
