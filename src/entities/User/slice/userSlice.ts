import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User, UserSchema } from '../types/userSchema';
import { LOCAL_STORAGE_AUTH_KEY } from '~/shared/constants/localStorage';

const initialState: UserSchema = {
  isInited: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthDate: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthDate: (state) => {
      const authData = localStorage.getItem(LOCAL_STORAGE_AUTH_KEY);
      if (authData) {
        state.authData = JSON.parse(authData);
      }
      state.isInited = true;
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(LOCAL_STORAGE_AUTH_KEY);
    },
  },
})

export const { actions: userActions } = userSlice;

export const { reducer: userReducer } = userSlice;