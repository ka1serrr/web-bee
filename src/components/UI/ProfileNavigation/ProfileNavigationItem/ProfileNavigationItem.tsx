import styles from './profileNavigationItem.module.scss';
import { IProfileNavigation, ProfileNavigationData } from '../types';
import { Link } from 'react-router-dom';
import { FC } from 'react';

export const ProfileNavigationItem: FC<IProfileNavigation> = ({ data }) => {
  let formattedNotifications: number;
  if (data.notifications) {
    formattedNotifications = new Intl.NumberFormat('en-IN').format(data.notifications);
  }

  return (
    <Link to={data.link}>
      <div className={styles.item}>
        <div className={styles.text}>
          <img src={`${data.img}`} alt='person' />
          <span>{data.text}</span>
        </div>
        <div className={styles.notifications} style={{ color: data.color, backgroundColor: data.colorBg }}>
          <span>{data?.additionalString} </span>
          {formattedNotifications}
        </div>
      </div>
    </Link>
  );
};
