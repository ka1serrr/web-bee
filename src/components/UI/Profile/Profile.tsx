import styles from './profile.module.scss';
import { ProfileNavigation } from '@/components/UI/ProfileNavigation/ProfileNavigation';
import { Status } from '@/components/UI/Status/Status';

const Content = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.avatar}>
        <img src='img/profile/avatar.jpg' alt='' />
      </div>
      <div className={styles.name}>Hanna Dorman</div>
      <div className={styles.jobTitle}>UX/UI designer</div>
      <div className={styles.socialnets}>
        <img src='img/profile/tg.svg' alt='tg' />
        <img src='img/profile/hh.svg' alt='hh' />
        <img src='img/profile/tw.svg' alt='tw' />
      </div>
    </div>
  );
};

export const Profile = () => {
  return (
    <>
      <Content />
      <ProfileNavigation />
      <Status />
    </>
  );
};
