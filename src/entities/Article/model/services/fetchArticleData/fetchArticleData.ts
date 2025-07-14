import { createAsyncThunk } from "@reduxjs/toolkit"
import { AsyncThunkConfigExtra } from "~/app/providers/StoreProvider";
import i18n from "~/shared/config/i18n/i18n";
import { Article } from "../../types/article";

export const fetchArticleData = createAsyncThunk<Article, string, AsyncThunkConfigExtra<string>>(
  '/article',
  async (id, thunkAPI) => {
    try {
      const response = await thunkAPI.extra.api.get<Article>(`/articles/${id}`);
      if (!response.data) {
        throw Error();
      }
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(i18n.t('fetchArticleDataError'));
    }
  },
)