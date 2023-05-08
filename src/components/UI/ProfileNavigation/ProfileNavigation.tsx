import styles from './profileNavigation.module.scss';
import { useState } from 'react';
import { ProfileNavigationItem } from '@/components/UI/ProfileNavigation/ProfileNavigationItem/ProfileNavigationItem';
import { profileNavigationData } from './dataMyProfile';
import { settingsNavigationData } from './dataSettings';
import { ProfileNavigationData } from './types';
import clsx from 'clsx';

const ProfileNavigationItems = ({ data }: ProfileNavigationData[]) => {
  return (
    <>
      {data.map((item: ProfileNavigationData) => (
        <ProfileNavigationItem
          key={item.text}
          img={item.img}
          text={item.text}
          link={item.link}
          additionalString={item?.additionalString}
          colorBg={item?.colorBg}
          color={item?.color}
          notifications={item?.notifications}
        />
      ))}
    </>
  );
};
export const ProfileNavigation = () => {
  const [navBarOpen, setNavBarOpen] = useState<boolean>(true);
  const closeNavigation = () => {
    setNavBarOpen(!navBarOpen);
  };

  return (
    <div className={styles.profileNavigation}>
      <div onClick={closeNavigation} className={styles.header}>
        <span>Navigation</span>
        <img
          src='img/profile/navigation/arrow.svg'
          alt=''
          className={clsx(styles.arrow, {
            [styles.arrowInActive]: !navBarOpen,
          })}
        />
      </div>
      <div
        className={clsx(styles.itemsWrapper, {
          [styles.itemsClosedWrapper]: !navBarOpen,
        })}
      >
        <div className={styles.items}>
          <div className={styles.wrapper}>
            <ProfileNavigationItems data={profileNavigationData} />
          </div>
        </div>
        <div className={styles.items}>
          <div className={styles.wrapper}>
            <ProfileNavigationItems data={settingsNavigationData} />
          </div>
        </div>
      </div>
    </div>
  );
};
