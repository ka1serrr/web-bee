import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from '@/components/UI/Loader/Loader';
import Timer from '@/components/pages/TimerPage/TimerPage';

const MainPage = React.lazy(() => import('@/components/pages/MainPage/MainPage'));
const MapPage = React.lazy(() => import('@/components/pages/MapPage/MapPage'));

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Suspense fallback={<Loader />}>
            <MainPage />
          </Suspense>
        }
      />
      <Route
        path='/map'
        element={
          <Suspense fallback={<Loader />}>
            <MapPage />
          </Suspense>
        }
      />
      <Route path='/timer' element={<Timer />} />
    </Routes>
  );
};
