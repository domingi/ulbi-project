import { createAsyncThunk } from "@reduxjs/toolkit"
import { AsyncThunkConfigExtra } from "~/app/providers/StoreProvider";
import i18n from "~/shared/config/i18n/i18n";
import { Profile } from "../../model/types/profileSchema";

export const fetchProfileData = createAsyncThunk<Profile, void, AsyncThunkConfigExtra<string>>(
  '/profile',
  async (_, thunkAPI) => {
    try {
      const response = await thunkAPI.extra.api.get<Profile>('/profile');
      if (!response.data) {
        throw Error();
      }
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(i18n.t('fetchProfileDataError'));
    }
  },
)