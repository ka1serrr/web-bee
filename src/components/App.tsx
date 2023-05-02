import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from '@/components/AppRoutes';
import { Header } from '@/components/UI/Header/Header';
import { NavBar } from '@/components/UI/NavBar/NavBar';

export const App = () => {
  return (
    <Router>
      <Header />
      <NavBar />
      <AppRoutes />
    </Router>
  );
};
