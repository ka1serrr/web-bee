import styles from './profile.module.scss';

export const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.avatar}>
        <img src='img/profile/avatar.jpg' alt='' />
      </div>
    </div>
  );
};
