import { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import Loader from '../common/Loader';

const Dashboard = lazy(() => import('../pages/Dashboard'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes = [
  { path: '/', element: <Dashboard /> },
  { path: '*', element: <NotFound /> },
];

const Routes = () => {
  const routing = useRoutes(routes);

  return <Suspense fallback={<Loader />}>{routing}</Suspense>;
};

export default Routes;
