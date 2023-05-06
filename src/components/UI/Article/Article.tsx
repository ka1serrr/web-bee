import styles from './article.module.scss';
import { useEffect, useState } from 'react';
import { MainPageArticle } from '@/components/pages/MainPage/types';
import { CommentsSection } from '@/components/UI/CommentsSection/CommentsSection';
import clsx from 'clsx';
interface IArticle extends MainPageArticle {
  index: number;
}
export const Article = ({ img, comment, commentsNumber, time, timeAgo, title, views, author, index }: IArticle) => {
  const [articleOpen, setArticleOpen] = useState(false);

  useEffect(() => {
    if (index === 0) {
      setArticleOpen(true);
    }
  }, []);

  const handleClick = () => {
    if (!articleOpen) {
      setArticleOpen(!articleOpen);
    }
  };

  return (
    <article
      onClick={handleClick}
      className={clsx(styles.article, {
        [styles.articleClosed]: !articleOpen,
      })}
    >
      <div className={styles.wrapper}>
        <div className={styles.articleClosedContent}>
          <div className={styles.title}>{title}</div>
          <div className={styles.time}>
            <img src='img/article/Time.svg' alt='time' />
            <div>{timeAgo} minutes ago</div>
            <img src='img/article/more.svg' alt='' className={styles.showMore} />
          </div>
        </div>
        <div className={styles.content}>
          <img className={styles.image} src={`${img}`} alt='bg' />
          <div className={styles.author}>
            <img src='img/article/comment.svg' alt='comment' />
            <div>
              <span>{author}</span> commented:
            </div>
          </div>
          <CommentsSection author={author} text={comment} time={time} />
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
      </div>
    </article>
  );
};
