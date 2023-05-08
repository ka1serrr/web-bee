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
          <div className={styles.headerStatisticWrapper}>
            <ul className={styles.headerStatistic}>
              <li className={styles.headerStatisticItem}>
                <img src='img/header/statistic/statistics.svg' alt='statistics' />
                <span>Statistics</span>
              </li>
              <li className={styles.headerStatisticItem}>
                <img src='img/header/statistic/invoices.svg' alt='invoices' />
                <span>Invoices</span>
              </li>
              <li className={styles.headerStatisticItem}>
                <img src='img/header/statistic/schedule.svg' alt='schedule' />
                <span>Schedule</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
