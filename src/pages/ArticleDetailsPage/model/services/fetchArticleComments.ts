import { createAsyncThunk } from "@reduxjs/toolkit"
import { AsyncThunkConfigExtra } from "~/app/providers/StoreProvider";
import i18n from "~/shared/config/i18n/i18n";
import { IComment } from "~/entities/Comment";

export const fetchArticleComments = createAsyncThunk<IComment[], string, AsyncThunkConfigExtra<string>>(
  '/comments',
  async (articleId, thunkAPI) => {
    try {
      if (!articleId) {
        return thunkAPI.rejectWithValue(i18n.t('fetchArticleCommentsError'))
      }
      const response = await thunkAPI.extra.api.get<IComment[]>('/comments', { params: {
        articleId,
        _expand: 'user',
      }});
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(i18n.t('fetchArticleCommentsError'));
    }
  },
)