import { ProfileNavigation } from '@/components/UI/ProfileNavigation/ProfileNavigation';
import { Status } from '@/components/UI/Status/Status';
import { User } from '@/components/UI/User/User';

export const Profile = () => {
  return (
    <>
      <User />
      <ProfileNavigation />
      <Status />
    </>
  );
};
