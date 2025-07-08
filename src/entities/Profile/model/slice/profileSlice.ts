import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Profile, ProfileSchema } from '../types/profileSchema';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

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
    setProfileReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
    updateProfileData: (state, action: PayloadAction<Profile>) => {
      state.formData = {
        ...state.formData,
        ...action.payload,
      };
    },
    cancelEdit: (state) => {
      state.formData = state.data;
      state.readonly = true;
      state.validateErrors = undefined;
    },
  },
  extraReducers:  (builder) => {
    builder.addCase(fetchProfileData.fulfilled, (state, action) => {
      state.error = '';
      state.isLoading = false;
      state.data = action.payload;
      state.formData = action.payload;
    })
    builder.addCase(fetchProfileData.pending, (state) => {
      state.error = '';
      state.isLoading = true;
    })
    builder.addCase(fetchProfileData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload || '';
    })
    builder.addCase(updateProfileData.fulfilled, (state, action) => {
      state.validateErrors = undefined;
      state.isLoading = false;
      state.data = action.payload;
      state.formData = action.payload;
      state.readonly = true;
    })
    builder.addCase(updateProfileData.pending, (state) => {
      state.validateErrors = undefined;
      state.isLoading = true;
    })
    builder.addCase(updateProfileData.rejected, (state, action) => {
      state.isLoading = false;
      state.validateErrors = action.payload;
    })
  },
})

export const { actions: profileActions } = profileSlice;

export const { reducer: profileReducer } = profileSlice;