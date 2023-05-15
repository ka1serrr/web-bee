import styles from './commentsSection.module.scss';
import { FC } from 'react';
interface ICommentSection {
  author: string;
  text: string;
  time: string;
}
export const CommentsSection: FC<ICommentSection> = ({ author, text, time }) => {
  const authorName = author.split(' ')[0];
  return (
    <div className={styles.comment}>
      <p className={styles.text}>{text}</p>
      <div className={styles.author}>
        – {authorName}, {time}
      </div>
    </div>
  );
};
