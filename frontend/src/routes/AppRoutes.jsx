import { lazy, Suspense } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import AppShell from '../components/layout/AppShell';
import LoadingScreen from '../components/common/LoadingScreen';
import ProtectedRoute from './ProtectedRoute';

const Home = lazy(() => import('../pages/Home'));
const AppListing = lazy(() => import('../pages/AppListing'));
const AppDetails = lazy(() => import('../pages/AppDetails'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const UserProfile = lazy(() => import('../pages/UserProfile'));
const OwnerDashboard = lazy(() => import('../pages/OwnerDashboard'));
const UserManagement = lazy(() => import('../pages/UserManagement'));
const AddApp = lazy(() => import('../pages/AddApp'));
const EditApp = lazy(() => import('../pages/EditApp'));
const NotificationsPage = lazy(() => import('../pages/Notifications'));

function ShellLayout() {
  return (
    <AppShell>
      <Outlet />
    </AppShell>
  );
}

function AppRoutes() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route element={<ShellLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/apps" element={<AppListing />} />
          <Route path="/apps/:id" element={<AppDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <UserProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/owner"
            element={
              <ProtectedRoute roles={['owner']}>
                <OwnerDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/owner/users"
            element={
              <ProtectedRoute roles={['owner']}>
                <UserManagement />
              </ProtectedRoute>
            }
          />
          <Route
            path="/owner/apps/new"
            element={
              <ProtectedRoute roles={['owner']}>
                <AddApp />
              </ProtectedRoute>
            }
          />
          <Route
            path="/owner/apps/:id/edit"
            element={
              <ProtectedRoute roles={['owner']}>
                <EditApp />
              </ProtectedRoute>
            }
          />
          <Route
            path="/notifications"
            element={
              <ProtectedRoute>
                <NotificationsPage />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
