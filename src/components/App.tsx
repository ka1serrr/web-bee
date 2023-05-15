import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from '@/components/AppRoutes';
import { Header } from '@/components/UI/Header/Header';
import { NavBar } from '@/components/UI/NavBar/NavBar';
import { Provider } from 'react-redux';
import { persistor, store } from '@/store/store';
import { PersistGate } from 'redux-persist/integration/react';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Header />
          <NavBar />
          <AppRoutes />
        </Router>
      </PersistGate>
    </Provider>
  );
};
