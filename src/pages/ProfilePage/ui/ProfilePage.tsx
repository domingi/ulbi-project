import { useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { fetchProfileData, getProfileFormData, getProfileError, getProfileIsLoading, getProfileReadonly, profileActions, ProfileCard, profileReducer } from "~/entities/Profile";
import { useAppDispatch } from "~/shared/hooks/useAppDispatch/useAppDispatch";
import { DynamicModuleLoader } from "~/shared/lib/DynamicModuleLoader/DynamicModuleLoader";
import ProfilePageHeader from "./ProfilePageHeader/ProfilePageHeader";
import { CURRENCY } from "~/entities/Currency";
import { COUNTRY } from "~/entities/Country";
import { useParams } from "react-router-dom";
import { getAuthData } from "~/entities/User";

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const data = useSelector(getProfileFormData);
  const userData = useSelector(getAuthData);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);
  const error = useSelector(getProfileError);
  const reducers = {
    profile: profileReducer,
  };

  const isAuthUser = data?.id === userData?.id;
  const onChangeFirst = useCallback((first: string) => {
    dispatch(profileActions.updateProfileFormData({ first }))
  }, []);
  
  const onChangeLast = useCallback((lastName: string) => {
    dispatch(profileActions.updateProfileFormData({ lastName }))
  }, []);

  const onChangeCity = useCallback((city: string) => {
    dispatch(profileActions.updateProfileFormData({ city }))
  }, []);

  const onChangeAge = useCallback((value: string) => {
    if ((/^\d+$/).test(value) || !value) {
      dispatch(profileActions.updateProfileFormData({ age: value || '' }));
    }
  }, []);

  const onChangeAvatar = useCallback((avatar: string) => {
    dispatch(profileActions.updateProfileFormData({ avatar }))
  }, []);

  const onChangeUsername = useCallback((username: string) => {
    dispatch(profileActions.updateProfileFormData({ username }))
  }, []);

  const onChangeCurrency = useCallback((currency: CURRENCY) => {
    dispatch(profileActions.updateProfileFormData({ currency }))
  }, []);

  const onChangeCountry = useCallback((country: COUNTRY) => {
    dispatch(profileActions.updateProfileFormData({ country }))
  }, []);  

  useEffect(() => {
    if (__PROJECT__ !== 'storybook' && id) {
      dispatch(fetchProfileData(id));
    }
  }, [id])

  return (
    <DynamicModuleLoader reducers={reducers}>
      {isAuthUser && <ProfilePageHeader />}
      <ProfileCard
        data={data}
        isLoading={isLoading}
        readonly={readonly}
        error={error}
        onChangeFirst={onChangeFirst}
        onChangeLast={onChangeLast}
        onChangeCity={onChangeCity}
        onChangeAge={onChangeAge}
        onChangeAvatar={onChangeAvatar}
        onChangeUsername={onChangeUsername}
        onChangeCurrency={onChangeCurrency}
        onChangeCountry={onChangeCountry}
      />
    </DynamicModuleLoader>
  )
};

export default ProfilePage;