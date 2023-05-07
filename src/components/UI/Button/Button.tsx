import styles from './button.module.scss';
import { IButton } from '@/components/UI/Button/types';
import { useActions } from '@/hooks/useActions';

export const Button = ({ text, margin }: IButton) => {
  const { setIsEditing } = useActions();
  return (
    <button className={styles.button} style={{ marginTop: margin }} onClick={setIsEditing}>
      {text}
    </button>
  );
};
