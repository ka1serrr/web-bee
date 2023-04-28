import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

export const Subheader = () => {
  return (
    <nav className={styles.nav}>
      <div className='container'>
        <div className={styles.wrapper}>
          <ul className={styles.navLeft}>
            <li className={styles.navItem}>
              <NavLink to='/'>
                <div className='hamburger'>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span>Activity</span>
              </NavLink>
            </li>
            <li className={styles.navItem}>2</li>
            <li className={styles.navItem}>3</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
