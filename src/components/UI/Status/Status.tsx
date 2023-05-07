import styles from './status.module.scss';
import { useState } from 'react';
import clsx from 'clsx';
import { Message } from '@/components/UI/Message/Message';
import { Button } from '@/components/UI/Button/Button';
import { useTypedSelector } from '@/hooks/useTypedSelector';

export const Status = () => {
  const [statusOpen, setStatusOpen] = useState<boolean>(true);
  const { message, isEditing } = useTypedSelector((state) => state.message);
  const closeStatus = () => {
    setStatusOpen(!statusOpen);
  };

  return (
    <div className={styles.status}>
      <div className={styles.header} onClick={closeStatus}>
        <span>Share your thoughts</span>
        <img
          src='img/profile/navigation/arrow.svg'
          alt=''
          className={clsx(styles.arrow, {
            [styles.arrowInActive]: !statusOpen,
          })}
        />
      </div>
      <div
        className={clsx(styles.messageBlock, {
          [styles.messageClosedBlock]: !statusOpen,
        })}
      >
        {isEditing ? (
          <div className={styles.wrapper}>
            <Message />
            <Button text='Save' margin='8px' />
          </div>
        ) : (
          <div className={styles.wrapper}>
            {message}
            <Button text='Edit' margin='8px' />
          </div>
        )}
      </div>
    </div>
  );
};
