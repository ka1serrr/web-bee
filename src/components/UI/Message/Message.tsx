import styles from './message.module.scss';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useActions } from '@/hooks/useActions';
import { useDispatch } from 'react-redux';

export const Message = () => {
  const { message } = useTypedSelector((state) => state.message);
  const dispatch = useDispatch();
  const { changeMessage, setIsEditing } = useActions();

  const setMessage = (e) => {
    const value = e.target.value;
    changeMessage(value);
  };

  return (
    <div className={styles.message}>
      <textarea
        className={styles.textarea}
        placeholder='Enter your message...'
        value={message}
        onChange={setMessage}
      ></textarea>
    </div>
  );
};
