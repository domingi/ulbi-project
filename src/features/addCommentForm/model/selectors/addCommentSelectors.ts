import { StoreScheme } from "~/app/providers/StoreProvider";

export const getNewComment = (state: StoreScheme) => state?.addComment?.comment;
