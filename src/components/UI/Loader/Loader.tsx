import styles from './loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <img src='img/loader/loader.svg' alt='loading' />
    </div>
  );
};

export default Loader;
