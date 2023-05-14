import styles from './user.module.scss';
import { useTypedSelector } from '@/hooks/useTypedSelector';

export const User = () => {
  const user = useTypedSelector((state) => state.user);

  return (
    <div className={styles.user}>
      <div className={styles.avatar}>
        <img src={`${user.img}`} alt='' />
      </div>
      <div className={styles.name}>{user.name}</div>
      <div className={styles.jobTitle}>{user.job}</div>
      <div className={styles.socialnets}>
        {user.socialNets.map((item) => (
          <img src={`${item.img}`} alt={`${item.link}`} />
        ))}
      </div>
    </div>
  );
};
