import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.wrapper}>
          <div className={styles.headerUserPages}>
            <span>User pages</span> - Profile
          </div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </header>
  );
};
