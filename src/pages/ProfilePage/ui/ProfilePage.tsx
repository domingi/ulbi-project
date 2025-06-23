import { useEffect } from "react";
import { fetchProfileData, ProfileCard, profileReducer } from "~/entities/Profile";
import { useAppDispatch } from "~/shared/hooks/useAppDispatch/useAppDispatch";
import { DynamicModuleLoader } from "~/shared/lib/DynamicModuleLoader/DynamicModuleLoader";

const ProfilePage = () => {
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(fetchProfileData());
  // }, [])

  return (
    <DynamicModuleLoader reducerName='profile' reducer={profileReducer}>
      <ProfileCard />
    </DynamicModuleLoader>
  )
};

export default ProfilePage;