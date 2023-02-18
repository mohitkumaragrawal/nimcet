import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
import Dashboard from '../pages/dashboard';

// layouts
import MainLayout from '../layouts/main';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';

// guards
import GuestGuard from '../guards/GuestGuard';
// import AuthGuard from '../guards/AuthGuard';
// import RoleBasedGuard from '../guards/RoleBasedGuard';

// components
import LoadingScreen from '../components/LoadingScreen';
import AuthGuard from '../guards/AuthGuard';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense fallback={<LoadingScreen isDashboard={pathname.includes('/dashboard')} />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    // Main Routes
    {
      path: '/faculty/login',
      element: (
        <GuestGuard>
          <FacultyLogin />
        </GuestGuard>
      ),
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: 'dashboard',
          element: (
            <AuthGuard type="faculty">
              <Dashboard />
            </AuthGuard>
          ),
        },
        {
          path: 'marksentry',
          children: [
            {
              path: ':course_id',
              element: (
                <AuthGuard type="faculty">
                  <MarksEntry />
                </AuthGuard>
              ),
            },
          ],
        },
        {
          path: '/student',
          children: [
            {
              path: 'login',
              element: (
                <GuestGuard>
                  <StudentLogin />
                </GuestGuard>
              ),
            },
            {
              path: 'info',
              element: (
                // <AuthGuard type="student">
                  <StudentPortal />
                // </AuthGuard>
              ),
            },
          ],
        },
      ],
    },

    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: '500', element: <Page500 /> },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
  ]);
}

// IMPORT COMPONENTS

// Authentication
const FacultyLogin = Loadable(lazy(() => import('../pages/auth/FacultyLogin')));
const StudentLogin = Loadable(lazy(() => import('../pages/auth/StudentLogin')));

const MarksEntry = Loadable(lazy(() => import('../pages/marksentry')));
const StudentPortal = Loadable(lazy(() => import('../pages/studentportal')));

const Page404 = Loadable(lazy(() => import('../pages/Page404')));
const Page500 = Loadable(lazy(() => import('../pages/Page500')));
