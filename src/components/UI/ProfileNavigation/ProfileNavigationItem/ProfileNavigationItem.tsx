import styles from './profileNavigationItem.module.scss';
import { ProfileNavigationData } from '../types';
import { Link } from 'react-router-dom';

export const ProfileNavigationItem = ({
  img,
  color,
  colorBg,
  additionalString,
  notifications,
  text,
  link,
}: ProfileNavigationData) => {
  let formatedNotifications: number;
  if (notifications) {
    formatedNotifications = new Intl.NumberFormat('en-IN').format(notifications);
  }

  return (
    <Link to={link}>
      <div className={styles.item}>
        <div className={styles.text}>
          <img src={`${img}`} alt='person' />
          <span>{text}</span>
        </div>
        <div className={styles.notifications} style={{ color: color, backgroundColor: colorBg }}>
          <span>{additionalString} </span>
          {formatedNotifications}
        </div>
      </div>
    </Link>
  );
};
