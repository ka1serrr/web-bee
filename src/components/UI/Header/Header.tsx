import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.wrapper}>
          <div className={styles.headerUserPages}>
            <img src='img/header/arrow-back.svg' alt='arrow' />
            <div>
              <span>User pages</span> - Profile
            </div>
          </div>
          <div>
            <ul className={styles.headerStatistic}>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
