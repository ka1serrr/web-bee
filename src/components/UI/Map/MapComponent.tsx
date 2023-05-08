import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { useEffect } from 'react';

interface IMapComponent {
  // eslint-disable-next-line @typescript-eslint/ban-types
  callBack: Function;
}

export const MapComponent = ({ callBack }: IMapComponent) => {
  const defaultState = {
    center: [55.621982, 37.607846],
    zoom: 15,
    controls: ['zoomControl', 'fullscreenControl'],
  };

  return (
    <YMaps>
      <Map
        onLoad={() => callBack(false)}
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
