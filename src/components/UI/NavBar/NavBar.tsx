import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';
import { navBarLeftBase } from './navBarLeftBase';
import { NavBarItem } from '@/components/UI/NavBar/NavBarItem/NavBarItem';
import { NavItem } from '@/components/UI/NavBar/types';
import { navBarRightBase } from '@/components/UI/NavBar/navBarRightBase';

// TODO: для планшетов и телефонов нарисовать выезжающую штучку.
const NavBarLeftContent = () => {
  return (
    <>
      <li className={styles.navItem}>
        <NavLink to='/' className={({ isActive }) => (isActive ? styles.linkActive : styles.link)}>
          <div className='hamburger'>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span>Activity</span>
        </NavLink>
      </li>
      {navBarLeftBase.map((item: NavItem) => (
        <NavBarItem title={item.title} link={item.link} img={item.img} />
      ))}
    </>
  );
};

const NavBarRightContent = () => {
  return (
    <>
      {navBarRightBase.map((item: NavItem) => (
        <NavBarItem title={item.title} link={item.link} img={item.img} />
      ))}
      <li className={styles.settings}>
        <div className={styles.link}>
          <img className={styles.img} src='img/navbar/navRight/settings.svg' alt='' />
          <img src='img/navbar/navRight/arrow-down.svg' alt='' />
        </div>
      </li>
    </>
  );
};

export const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className='container'>
        <div className={styles.wrapper}>
          <ul className={styles.navigation}>
            <NavBarLeftContent />
          </ul>
          <ul className={styles.navigation}>
            <NavBarRightContent />
          </ul>
        </div>
      </div>
    </nav>
  );
};
