import { useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { fetchProfileData, getProfileFormData, getProfileError, getProfileIsLoading, getProfileReadonly, profileActions, ProfileCard, profileReducer } from "~/entities/Profile";
import { useAppDispatch } from "~/shared/hooks/useAppDispatch/useAppDispatch";
import { DynamicModuleLoader } from "~/shared/lib/DynamicModuleLoader/DynamicModuleLoader";
import ProfilePageHeader from "./ProfilePageHeader/ProfilePageHeader";
import { CURRENCY } from "~/entities/Currency";
import { COUNTRY } from "~/entities/Country";

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const data = useSelector(getProfileFormData);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);
  const error = useSelector(getProfileError);

  const onChangeFirst = useCallback((first: string) => {
    dispatch(profileActions.updateProfileData({ first }))
  }, []);
  
  const onChangeLast = useCallback((lastName: string) => {
    dispatch(profileActions.updateProfileData({ lastName }))
  }, []);

  const onChangeCity = useCallback((city: string) => {
    dispatch(profileActions.updateProfileData({ city }))
  }, []);

  const onChangeAge = useCallback((value: string) => {
    if ((/^\d+$/).test(value) || !value) {
      dispatch(profileActions.updateProfileData({ age: value || '' }));
    }
  }, []);

  const onChangeAvatar = useCallback((avatar: string) => {
    dispatch(profileActions.updateProfileData({ avatar }))
  }, []);

  const onChangeUsername = useCallback((username: string) => {
    dispatch(profileActions.updateProfileData({ username }))
  }, []);

  const onChangeCurrency = useCallback((currency: CURRENCY) => {
    dispatch(profileActions.updateProfileData({ currency }))
  }, []);

  const onChangeCountry = useCallback((country: COUNTRY) => {
    dispatch(profileActions.updateProfileData({ country }))
  }, []);  

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [])

  return (
    <DynamicModuleLoader reducerName='profile' reducer={profileReducer}>
      <ProfilePageHeader />
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