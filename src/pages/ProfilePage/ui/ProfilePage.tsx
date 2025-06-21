import { profileReducer } from "~/entities/Profile";
import { DynamicModuleLoader } from "~/shared/lib/DynamicModuleLoader/DynamicModuleLoader";

const ProfilePage = () => {
  
  return (
    <DynamicModuleLoader reducerName='profile' reducer={profileReducer}>
      <div>PROFILE PAGE</div>
    </DynamicModuleLoader>
  )
};

export default ProfilePage;