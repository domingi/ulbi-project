import {
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'
import { IComment } from '~/entities/Comment'
import { StoreScheme } from '~/app/providers/StoreProvider';
import { ArticleCommentsSchema } from '../types/ArticleCommentsSchema';
import { fetchArticleComments } from '../services/fetchArticleComments';

const commentsAdapter = createEntityAdapter({
  selectId: (comment: IComment) => comment.id,
})


const articleCommentsSlice = createSlice({
  name: 'articleComments',
  initialState:  commentsAdapter.getInitialState<ArticleCommentsSchema>({
    isLoading: false,
    error: '',
    ids: [],
    entities: {},
  }),
  reducers: {
  },
  extraReducers:  (builder) => {
    builder.addCase(fetchArticleComments.fulfilled, (state, action) => {
      state.error = '';
      state.isLoading = false;
      commentsAdapter.setAll(state, action.payload);
    })
    builder.addCase(fetchArticleComments.pending, (state) => {
      state.error = '';
      state.isLoading = true;
    })
    builder.addCase(fetchArticleComments.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload || '';
    })
  },
})

export const getArticleComments = 
  commentsAdapter.getSelectors<StoreScheme>(
    state => state.articleComments || commentsAdapter.getInitialState()
  );

export const { reducer: articleCommentsReducer } = articleCommentsSlice;