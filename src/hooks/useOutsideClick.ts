import { useEffect } from 'react';

export const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const event = (e) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      callback(e);
    };

    document.addEventListener('mousedown', event);
    return () => document.removeEventListener('mousedown', event);
  }, [ref, callback]);
};
