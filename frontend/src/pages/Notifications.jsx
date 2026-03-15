import { useEffect, useState } from 'react';
import { Alert, Button, Stack, Typography } from '@mui/material';
import NotificationList from '../components/notifications/NotificationList';
import LoadingScreen from '../components/common/LoadingScreen';
import PageHero from '../components/common/PageHero';
import notificationService from '../services/notificationService';

function NotificationsPage() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  async function loadNotifications(showLoader = false) {
    if (showLoader) {
      setLoading(true);
    }

    try {
      const response = await notificationService.getNotifications();
      setNotifications(response);
      setError('');
    } catch (requestError) {
      setError(requestError?.response?.data?.message || 'Unable to load notifications.');
    } finally {
      if (showLoader) {
        setLoading(false);
      }
    }
  }

  useEffect(() => {
    loadNotifications(true);

    const intervalId = window.setInterval(() => {
      loadNotifications(false);
    }, 15000);

    const handleFocus = () => {
      loadNotifications(false);
    };

    window.addEventListener('focus', handleFocus);

    return () => {
      window.clearInterval(intervalId);
      window.removeEventListener('focus', handleFocus);
    };
  }, []);

  async function handleMarkAllRead() {
    await notificationService.markAllRead();
    await loadNotifications(false);
  }

  async function handleRefresh() {
    await loadNotifications(true);
  }

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Stack spacing={4}>
      <PageHero
        eyebrow="Notification Center"
        title="Stay updated on app downloads and release announcements."
        description="This workspace refreshes regularly so new download alerts and update announcements appear here without needing a manual page reload."
        actions={
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
            <Button variant="contained" color="secondary" onClick={handleMarkAllRead}>
              Mark All Read
            </Button>
            <Button variant="outlined" onClick={handleRefresh} sx={{ color: '#fff', borderColor: 'rgba(255,255,255,0.45)' }}>
              Refresh
            </Button>
          </Stack>
        }
      />
      <Typography variant="body2" color="text.secondary">
        New notifications refresh automatically every 15 seconds and when this page regains focus.
      </Typography>
      {error ? <Alert severity="error">{error}</Alert> : null}
      <NotificationList notifications={notifications} />
    </Stack>
  );
}

export default NotificationsPage;
