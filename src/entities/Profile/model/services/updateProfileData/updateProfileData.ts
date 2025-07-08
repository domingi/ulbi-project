import { createAsyncThunk } from "@reduxjs/toolkit"
import { AsyncThunkConfigExtra } from "~/app/providers/StoreProvider";
import { Profile, VALIDATE_PROFILE_ERRORS } from "../../types/profileSchema";
import { validateProfileData } from "../validateProfileData/validateProfileData";

export const updateProfileData = createAsyncThunk<Profile, void, AsyncThunkConfigExtra<VALIDATE_PROFILE_ERRORS[]>>(
  'PUT /profile',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
  
      const errors = validateProfileData(state.profile?.formData);
      if (errors.length) {
        return thunkAPI.rejectWithValue(errors);
      }
  
      const response = await thunkAPI.extra.api.put('/profile', state.profile?.formData);
      if (!response.data) {
        throw Error();
      }
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue([VALIDATE_PROFILE_ERRORS.SERVER_ERROR]);
    }
  },
)