import styles from './commentsSection.module.scss';
interface ICommentSection {
  author: string;
  text: string;
  time: string;
}
export const CommentsSection = ({ author, text, time }: ICommentSection) => {
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
