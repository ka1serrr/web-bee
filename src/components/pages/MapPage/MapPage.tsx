import styles from './mapPage.module.scss';
import { MapComponent } from '@/components/UI/Map/MapComponent';
import { useState } from 'react';
import Loader from '@/components/UI/Loader/Loader';
import { useTimer } from '@/hooks/useTimer';

const MapPage = () => {
  useTimer();
  const [loading, setLoading] = useState(true);
  return (
    <div className={styles.map}>
      <div className='container'>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <span>Basic map</span>
          </div>
          {loading && <Loader />}
          <MapComponent callBack={setLoading} />
        </div>
      </div>
    </div>
  );
};

export default MapPage;
