import styles from './articleClodes.module.scss';
import { IClosedArticle } from '@/components/pages/MainPage/types';

export const ArticleClosed = ({ timeAgo, title }: IClosedArticle) => {
  return (
    <div className={styles.articleClosed}>
      <div className={styles.articleClosedContent}>
        <div className={styles.title}>{title}</div>
        <div className={styles.time}>
          <img src='img/article/Time.svg' alt='' />
          <span>{timeAgo} minutes ago</span>
          <img src='img/article/more.svg' />
        </div>
      </div>
    </div>
  );
};
