import { Alert, Box, Button, Card, CardContent, Chip, Grid, Stack, Typography } from '@mui/material';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import { Link as RouterLink } from 'react-router-dom';
import PageHero from '../components/common/PageHero';
import useAuth from '../hooks/useAuth';
import { formatDate } from '../utils/formatters';

function UserProfile() {
  const { user } = useAuth();

  if (!user) {
    return <Alert severity="error">Unable to load your profile right now.</Alert>;
  }

  const summaryCards = [
    {
      label: 'Role',
      value: user.role,
      icon: <StorefrontOutlinedIcon color="primary" />,
      accent: 'linear-gradient(180deg, rgba(239,246,255,0.98), rgba(224,231,255,0.94))',
    },
    {
      label: 'Subscribed Apps',
      value: user.subscribedApps?.length || 0,
      icon: <DownloadOutlinedIcon color="primary" />,
      accent: 'linear-gradient(180deg, rgba(245,243,255,0.98), rgba(237,233,254,0.94))',
    },
    {
      label: 'Notifications',
      value: 'Live',
      icon: <NotificationsActiveOutlinedIcon color="primary" />,
      accent: 'linear-gradient(180deg, rgba(240,253,250,0.98), rgba(209,250,229,0.92))',
    },
  ];

  return (
    <Stack spacing={4}>
      <PageHero
        eyebrow="User Profile"
        title={`Welcome, ${user.name}`}
        description="Review your account details, subscription status, and quick navigation options from one place."
        actions={
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button component={RouterLink} to="/notifications" variant="contained" color="secondary">
              Open Notifications
            </Button>
            <Button component={RouterLink} to="/apps" variant="outlined" sx={{ color: '#fff', borderColor: 'rgba(255,255,255,0.5)' }}>
              Browse Apps
            </Button>
          </Stack>
        }
      />

      <Grid container spacing={3} alignItems="stretch" justifyContent="center">
        {summaryCards.map((item) => (
          <Grid item xs={12} md={4} key={item.label} sx={{ display: 'flex' }}>
            <Card sx={{ borderRadius: 2, height: '100%', width: '100%', background: item.accent }}>
              <CardContent sx={{ p: { xs: 3.5, md: 4 }, textAlign: 'center' }}>
                <Stack spacing={1.5} alignItems="center" justifyContent="center" sx={{ minHeight: 180 }}>
                  {item.icon}
                  <Typography color="text.secondary" fontWeight={700}>{item.label}</Typography>
                  <Typography variant="h3" sx={{ textTransform: 'capitalize' }}>
                    {item.value}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Card sx={{ borderRadius: 2 }}>
        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
          <Stack spacing={3}>
            <Box>
              <Typography variant="h4">Account Details</Typography>
              <Typography color="text.secondary">
                Your current profile information and session details.
              </Typography>
            </Box>
            <Grid container spacing={2.5}>
              <Grid item xs={12} md={6}>
                <Stack spacing={1.25}>
                  <Typography><strong>Name:</strong> {user.name}</Typography>
                  <Typography><strong>Email:</strong> {user.email}</Typography>
                  <Typography sx={{ textTransform: 'capitalize' }}><strong>Role:</strong> {user.role}</Typography>
                  <Typography><strong>Member Since:</strong> {formatDate(user.createdAt)}</Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  <Chip label="JWT Secured Session" color="primary" variant="outlined" />
                  <Chip label="Notifications Enabled" color="secondary" variant="outlined" />
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
}

export default UserProfile;
