import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Profile, ProfileSchema } from '../model/types/profileSchema';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';

const initialState: ProfileSchema = {
  data: undefined,
  isLoading: false,
  error: '',
  readonly: true,
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileData: (state, action: PayloadAction<Profile>) => {
      state.data = action.payload;
    },
  },
  extraReducers:  (builder) => {
    builder.addCase(fetchProfileData.fulfilled, (state, action) => {
      state.error = '';
      state.isLoading = false;
      state.data = action.payload;
    })
    builder.addCase(fetchProfileData.pending, (state, action) => {
      state.error = '';
      state.isLoading = true;
    })
    builder.addCase(fetchProfileData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload || '';
    })
  },
})

export const { actions: profileActions } = profileSlice;

export const { reducer: profileReducer } = profileSlice;