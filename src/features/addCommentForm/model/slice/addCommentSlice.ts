import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AddCommentSchema } from '../types/addCommentSchema';

const initialState: AddCommentSchema = {
  comment: '',
  isLoading: false,
  error: '',
}

export const addCommentSlice = createSlice({
  name: 'addComment',
  initialState,
  reducers: {
    setComment: (state, action: PayloadAction<string>) => {
      state.comment = action.payload;
    },
  },
})

export const { actions: addCommentActions } = addCommentSlice;

export const { reducer: addCommentReducer } = addCommentSlice;