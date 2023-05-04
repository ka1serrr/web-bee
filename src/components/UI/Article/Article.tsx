import styles from './article.module.scss';
import { useState } from 'react';
import { MainPageArticle } from '@/components/pages/MainPage/types';
import { CommentsSection } from '@/components/UI/CommentsSection/CommentsSection';
interface IArticle extends MainPageArticle {
  index: number;
}
export const Article = ({ img, comment, commentsNumber, time, timeAgo, title, views, author }: IArticle) => {
  const [articleOpen, setArticleOpen] = useState(false);

  return (
    <article className={`${styles.article}`}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <img className={styles.image} src={`${img}`} alt='bg' />
          <div className={styles.author}>
            <img src='img/article/comment.svg' alt='comment' />
            <div>
              <span>{author}</span> commented:
            </div>
          </div>
          <CommentsSection author={author} text={comment} time={time} />
        </div>
      </div>
    </article>
  );
};
