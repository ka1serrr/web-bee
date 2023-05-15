import styles from './timerPage.module.scss';
import { useTimer } from '@/hooks/useTimer';

function Timer() {
  const [startTime, currentTime] = useTimer();

  function formatTime(time: number) {
    const date = new Date(time);
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const seconds = date.getUTCSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

  return (
    <div className={styles.timer}>
      <div className='container'>
        <div className={styles.wrapper}>
          <div className={styles.header}>Timer</div>
          <div className={styles.time}>{startTime && currentTime && formatTime(currentTime - startTime)}</div>
        </div>
      </div>
    </div>
  );
}

export default Timer;
