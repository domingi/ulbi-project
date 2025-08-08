import { createAsyncThunk } from "@reduxjs/toolkit"
import { AsyncThunkConfigExtra } from "~/app/providers/StoreProvider";
import i18n from "~/shared/config/i18n/i18n";
import { IComment } from "~/entities/Comment";
import { getAuthData } from "~/entities/User";
import { getArticleData } from "~/entities/Article";
import { fetchArticleComments } from "./fetchArticleComments";

export const addCommentForArticle = createAsyncThunk<IComment[], string, AsyncThunkConfigExtra<string>>(
  '/articleComments/addCommentForArticle',
  async (text, thunkAPI) => {
    try {
      const userId = getAuthData(thunkAPI.getState())?.id;
      const articleId = getArticleData(thunkAPI.getState())?.id;
      if (!articleId || !userId || !text) {
        return thunkAPI.rejectWithValue('no data');
      }

      const response = await thunkAPI.extra.api.post<IComment[]>('/comments', { 
        articleId, userId, text
      });

      thunkAPI.dispatch(fetchArticleComments(articleId));

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('addCommentForArticleError');
    }
  },
)