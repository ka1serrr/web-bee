import styles from './button.module.scss';
import { IButton } from '@/components/UI/Button/types';
import { FC } from 'react';

export const Button: FC<IButton> = ({ text, margin, onClick }) => {
  return (
    <button className={styles.button} style={{ marginTop: margin }} onClick={onClick}>
      {text}
    </button>
  );
};
