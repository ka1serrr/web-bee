import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { FC, useEffect } from 'react';

interface MapComponentProps {
  // eslint-disable-next-line @typescript-eslint/ban-types
  onLoadCallback: (boolean) => void;
}

const defaultState = {
  center: [55.621982, 37.607846],
  zoom: 15,
  controls: ['zoomControl', 'fullscreenControl'],
};

export const MapComponent: FC<MapComponentProps> = ({ onLoadCallback }) => {
  return (
    <YMaps>
      <Map
        onLoad={() => onLoadCallback(false)}
        defaultState={defaultState}
        width='100%'
        height='70vh'
        modules={['control.ZoomControl', 'control.FullscreenControl']}
      >
        <Placemark geometry={[55.621982, 37.607846]} />
      </Map>
    </YMaps>
  );
};
