import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ArticleSchema } from '../types/article';
import { fetchArticleData } from '../services/fetchArticleData/fetchArticleData';

const initialState: ArticleSchema = {
  data: undefined,
  isLoading: false,
  error: '',
}

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setProfileReadonly: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers:  (builder) => {
    builder.addCase(fetchArticleData.fulfilled, (state, action) => {
      state.error = '';
      state.isLoading = false;
      state.data = action.payload;
    })
    builder.addCase(fetchArticleData.pending, (state) => {
      state.error = '';
      state.isLoading = true;
    })
    builder.addCase(fetchArticleData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload || '';
    })
  },
})

export const { actions: articleActions } = articleSlice;

export const { reducer: articleReducer } = articleSlice;