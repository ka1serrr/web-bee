import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';
import { navBarLeftBase } from './navBarLeftBase';
import { NavBarItem } from '@/components/UI/NavBar/NavBarItem/NavBarItem';
import { NavItem } from '@/components/UI/NavBar/types';
import { navBarRightBase } from '@/components/UI/NavBar/navBarRightBase';
import { Hamburger } from '@/components/UI/Hamburger/Hamburger';

const NavBarLeftContent = () => {
  return (
    <ul className={styles.navigation}>
      <li className={styles.navItem}>
        <NavLink to='/' className={({ isActive }) => (isActive ? styles.linkActive : styles.link)}>
          <Hamburger />
          <span>Activity</span>
        </NavLink>
      </li>
      {navBarLeftBase.map((item: NavItem) => (
        <NavBarItem title={item.title} link={item.link} img={item.img} key={item.title} />
      ))}
    </ul>
  );
};

const NavBarRightContent = () => {
  return (
    <ul className={styles.navigation}>
      {navBarRightBase.map((item: NavItem) => (
        <NavBarItem title={item.title} link={item.link} img={item.img} key={item.title} />
      ))}
      <li className={styles.settings}>
        <div className={styles.link}>
          <img className={styles.img} src='img/navbar/navRight/settings.svg' alt='' />
          <img src='img/navbar/navRight/arrow-down.svg' alt='' />
        </div>
      </li>
    </ul>
  );
};

export const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className='container'>
        <div className={styles.wrapper}>
          <NavBarLeftContent />
          <NavBarRightContent />
        </div>
      </div>
    </nav>
  );
};
