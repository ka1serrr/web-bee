import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const MainPage = React.lazy(() => import('@/components/pages/MainPage/MainPage'));

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <MainPage />
          </Suspense>
        }
      />
    </Routes>
  );
};
