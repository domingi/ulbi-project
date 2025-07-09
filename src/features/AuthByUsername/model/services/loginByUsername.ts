import { createAsyncThunk } from "@reduxjs/toolkit"
import { AsyncThunkConfigExtra } from "~/app/providers/StoreProvider";
import { User, userActions } from "~/entities/User"
import i18n from "~/shared/config/i18n/i18n";
import { ROUTE_PATHS } from "~/shared/config/routeConfig/routeConfig";
import { LOCAL_STORAGE_AUTH_KEY } from "~/shared/constants/localStorage";

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, AsyncThunkConfigExtra<string>>(
  '/login',
  async (authData, thunkAPI) => {
    try {
      const response = await thunkAPI.extra.api.post<User>('/login', authData);
      if (!response.data) {
        throw Error();
      }
      thunkAPI.dispatch(userActions.setAuthDate(response.data));
      localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, JSON.stringify(response.data));
      // thunkAPI.extra?.navigate?.(ROUTE_PATHS.profile);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(i18n.t('loginError'));
    }
  },
)