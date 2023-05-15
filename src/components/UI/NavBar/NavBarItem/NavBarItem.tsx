import styles from '@/components/UI/NavBar/NavBar.module.scss';
import { NavLink } from 'react-router-dom';

interface NavBarItem {
  title: string;
  link: string;
  img: string;
}

export const NavBarItem = ({ title, link, img }: NavBarItem) => {
  return (
    <li className={styles.navItem}>
      <NavLink to={link} className={({ isActive }) => (isActive ? styles.linkActive : styles.link)}>
        <img src={`img/navbar/${img}`} alt='' className={styles.img} />
        <span>{title}</span>
      </NavLink>
    </li>
  );
};
