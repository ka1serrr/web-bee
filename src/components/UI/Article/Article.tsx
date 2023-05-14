import styles from './article.module.scss';
import { useEffect, useState } from 'react';
import { MainPageArticle } from '@/components/pages/MainPage/types';
import { ArticleOpened } from '@/components/UI/Article/ArticleOpened/ArticleOpened';
import { ArticleClosed } from '@/components/UI/Article/ArticleClosed/ArticleClosed';
interface IArticle extends MainPageArticle {
  index: number;
}
export const Article = ({ img, comment, commentsNumber, title, views, timeAgo, index }: IArticle) => {
  const [isArticleOpen, setIsArticleOpen] = useState(false);

  useEffect(() => {
    if (index === 0) {
      setIsArticleOpen(true);
    }
  }, []);

  const handleClick = () => {
    if (!isArticleOpen) {
      setIsArticleOpen(!isArticleOpen);
    }
  };

  return (
    <article onClick={handleClick} className={styles.article}>
      {isArticleOpen ? (
        <ArticleOpened views={views} comment={comment} img={img} commentsNumber={commentsNumber} />
      ) : (
        <ArticleClosed title={title} timeAgo={timeAgo} />
      )}
    </article>
  );
};
