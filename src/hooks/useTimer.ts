import { useEffect, useState } from 'react';

export const useTimer = () => {
  const [startTime, setStartTime] = useState<any>(sessionStorage.getItem('startTime') || null);
  const [currentTime, setCurrentTime] = useState<number | null>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // @ts-ignore
      setCurrentTime(new Date().getTime());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (startTime === null) {
      sessionStorage.setItem('startTime', currentTime);
      setStartTime(currentTime);
    }
  }, [currentTime, startTime]);

  return [startTime, currentTime];
};
