import styles from './articleOpened.module.scss';
import { CommentsSection } from '@/components/UI/CommentsSection/CommentsSection';
import { IOpenedArticle } from '@/components/pages/MainPage/types';
import { FC } from 'react';

export const ArticleOpened: FC<IOpenedArticle> = ({ img, views, commentsNumber, comment }) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={`${img}`} alt='bg' />

      <div className={styles.author}>
        <img src='img/article/comment.svg' alt='comment' />
        <div>
          <span>{comment.author}</span> commented:
        </div>
      </div>

      <CommentsSection author={comment.author} text={comment.commentText} time={comment.time} />

      <div className={styles.views}>
        <div className={styles.viewsItem}>
          <img src='img/article/views.svg' alt='views' />
          <span>{views}</span>
        </div>
        <div className={styles.viewsItem}>
          <img src='img/article/comment.svg' alt='comment' />
          <span>{commentsNumber}</span>
        </div>
      </div>
    </div>
  );
};
