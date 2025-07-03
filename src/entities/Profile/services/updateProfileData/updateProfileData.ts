import { createAsyncThunk } from "@reduxjs/toolkit"
import { AsyncThunkConfigExtra } from "~/app/providers/StoreProvider";
import i18n from "~/shared/config/i18n/i18n";
import { Profile } from "../../model/types/profileSchema";

export const updateProfileData = createAsyncThunk<Profile, void, AsyncThunkConfigExtra<string>>(
  'PUT /profile',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const response = await thunkAPI.extra.api.put('/profile', state.profile?.formData);
      if (!response.data) {
        throw Error();
      }
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(i18n.t('updateProfileDataError'));
    }
  },
)