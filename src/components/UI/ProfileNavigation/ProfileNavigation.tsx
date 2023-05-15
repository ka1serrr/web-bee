import styles from './profileNavigation.module.scss';
import { FC, useState } from 'react';
import { ProfileNavigationItem } from '@/components/UI/ProfileNavigation/ProfileNavigationItem/ProfileNavigationItem';
import { profileNavigationData } from './dataMyProfile';
import { settingsNavigationData } from './dataSettings';
import { IProfileNavigation, ProfileNavigationData } from './types';
import clsx from 'clsx';

const ProfileNavigationItems = ({ data }: { data: ProfileNavigationData[] }) => {
  return (
    <>
      {data.map((item: ProfileNavigationData) => (
        <ProfileNavigationItem data={item} />
      ))}
    </>
  );
};
export const ProfileNavigation = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState<boolean>(true);
  const toggleNavigation = () => {
    setIsNavBarOpen(!isNavBarOpen);
  };

  return (
    <div className={styles.profileNavigation}>
      <div onClick={toggleNavigation} className={styles.header}>
        <span>Navigation</span>
        <img
          src='img/profile/navigation/arrow.svg'
          alt=''
          className={clsx(styles.arrow, {
            [styles.arrowInActive]: !isNavBarOpen,
          })}
        />
      </div>

      {isNavBarOpen ? (
        <div className={styles.itemsWrapper}>
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
      ) : null}
    </div>
  );
};
