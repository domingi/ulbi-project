import { createAsyncThunk } from "@reduxjs/toolkit"
import { AsyncThunkConfigExtra } from "~/app/providers/StoreProvider";
import i18n from "~/shared/config/i18n/i18n";
import { Profile } from "../../types/profileSchema";

export const fetchProfileData = createAsyncThunk<Profile, string, AsyncThunkConfigExtra<string>>(
  '/profile',
  async (profileId, thunkAPI) => {
    try {
      if (!profileId) return thunkAPI.rejectWithValue(i18n.t('fetchProfileDataError'));
      const response = await thunkAPI.extra.api.get<Profile>(`/profile/${profileId}`);
      if (!response.data) {
        throw Error();
      }
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(i18n.t('fetchProfileDataError'));
    }
  },
)