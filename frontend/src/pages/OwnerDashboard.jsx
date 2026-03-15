import { useEffect, useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import AppCard from '../components/apps/AppCard';
import LoadingScreen from '../components/common/LoadingScreen';
import PageHero from '../components/common/PageHero';
import EmptyState from '../components/common/EmptyState';
import appService from '../services/appService';
import { formatDate } from '../utils/formatters';

const panelSx = {
  borderRadius: 2,
  height: '100%',
  width: '100%',
  background: 'linear-gradient(180deg, rgba(255,255,255,0.96), rgba(241,245,255,0.94))',
};

const twoColumnGridSx = {
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: '50%',
    width: '1px',
    bgcolor: 'rgba(148,163,184,0.22)',
    transform: 'translateX(-50%)',
    display: { xs: 'none', md: 'block' },
  },
};

const twoColumnInnerSx = {
  display: 'grid',
  gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' },
  gap: 3,
  alignItems: 'stretch',
};

function OwnerDashboard() {
  const navigate = useNavigate();
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [feedback, setFeedback] = useState({ type: '', message: '' });
  const [dialogState, setDialogState] = useState({ open: false, appId: '', appName: '', version: '', message: '' });

  async function loadDashboard() {
    setLoading(true);
    try {
      const data = await appService.getOwnerDashboard();
      setDashboard(data);
    } catch (error) {
      setFeedback({ type: 'error', message: error?.response?.data?.message || 'Unable to load owner dashboard.' });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadDashboard();
  }, []);

  async function handleToggleVisibility(app) {
    try {
      await appService.updateVisibility(app.id, app.visibility === 'public' ? 'hidden' : 'public');
      setFeedback({ type: 'success', message: `${app.name} visibility updated successfully.` });
      await loadDashboard();
    } catch (error) {
      setFeedback({ type: 'error', message: error?.response?.data?.message || 'Unable to update application visibility.' });
    }
  }

  async function handleDelete(app) {
    const confirmed = window.confirm(`Delete ${app.name}? This will remove its reviews and downloads too.`);
    if (!confirmed) {
      return;
    }

    try {
      await appService.deleteApp(app.id);
      setFeedback({ type: 'success', message: `${app.name} deleted successfully.` });
      await loadDashboard();
    } catch (error) {
      setFeedback({ type: 'error', message: error?.response?.data?.message || 'Unable to delete the application.' });
    }
  }

  function handleOpenDialog(app) {
    setDialogState({ open: true, appId: app.id, appName: app.name, version: app.version, message: '' });
  }

  async function handleAnnounceUpdate() {
    try {
      await appService.announceUpdate(dialogState.appId, {
        version: dialogState.version,
        message: dialogState.message,
      });
      setDialogState({ open: false, appId: '', appName: '', version: '', message: '' });
      setFeedback({ type: 'success', message: 'Update announcement sent to subscribed users.' });
      await loadDashboard();
    } catch (error) {
      setFeedback({ type: 'error', message: error?.response?.data?.message || 'Unable to send update announcement.' });
    }
  }

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Stack spacing={4}>
      <PageHero
        eyebrow="Owner Console"
        title="Manage published applications, monitor user activity, and push updates."
        description="This dashboard fulfils the owner stories: CRUD, visibility control, download insights, comment visibility, and update announcements."
        compact
        actions={
          <Button component={RouterLink} to="/owner/apps/new" variant="contained" color="secondary" startIcon={<AddCircleOutlineOutlinedIcon />}>
            Add New Application
          </Button>
        }
      />

      {feedback.message ? <Alert severity={feedback.type || 'info'}>{feedback.message}</Alert> : null}

      {dashboard ? (
        <>
          <Grid container spacing={3} justifyContent="center" alignItems="stretch">
            {[
              { label: 'Total Apps', value: dashboard.stats.totalApps, tone: 'linear-gradient(180deg, rgba(239,246,255,0.98), rgba(224,231,255,0.94))' },
              { label: 'Visible Apps', value: dashboard.stats.visibleApps, tone: 'linear-gradient(180deg, rgba(245,243,255,0.98), rgba(237,233,254,0.94))' },
              { label: 'Total Downloads', value: dashboard.stats.totalDownloads, tone: 'linear-gradient(180deg, rgba(240,253,250,0.98), rgba(209,250,229,0.92))' },
              { label: 'Total Reviews', value: dashboard.stats.totalReviews, tone: 'linear-gradient(180deg, rgba(255,251,235,0.98), rgba(254,243,199,0.92))' },
            ].map((item) => (
              <Grid item xs={12} sm={6} lg={3} key={item.label} sx={{ display: 'flex' }}>
                <Card sx={{ ...panelSx, background: item.tone }}>
                  <CardContent sx={{ p: 3.5, textAlign: 'center' }}>
                    <Stack spacing={1.25} alignItems="center" justifyContent="center" sx={{ minHeight: 140 }}>
                      <Typography color="text.secondary" fontWeight={700}>
                        {item.label}
                      </Typography>
                      <Typography variant="h2">{item.value}</Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <BoxSection title="Your Applications">
            {dashboard.applications.length ? (
              <Box sx={twoColumnGridSx}>
                <Box sx={twoColumnInnerSx}>
                  {dashboard.applications.map((app) => (
                    <Box key={app.id} sx={{ display: 'flex' }}>
                      <AppCard app={app} ownerMode onToggleVisibility={handleToggleVisibility} onDelete={handleDelete} onAnnounce={handleOpenDialog} />
                    </Box>
                  ))}
                </Box>
              </Box>
            ) : (
              <EmptyState
                title="No applications published yet"
                description="Create your first application entry to start the owner workflow."
                actionLabel="Add Application"
                onAction={() => navigate('/owner/apps/new')}
              />
            )}
          </BoxSection>

          <Grid container spacing={3} alignItems="stretch" justifyContent="center">
            <Grid item xs={12} lg={6} sx={{ display: 'flex' }}>
              <Card sx={panelSx}>
                <CardContent sx={{ p: 3.5, height: '100%' }}>
                  <Stack spacing={2} sx={{ height: '100%' }}>
                    <Typography variant="h5" textAlign="center">
                      Recent Downloads
                    </Typography>
                    <Stack spacing={1.5} sx={{ height: '100%', justifyContent: 'flex-start' }}>
                      {dashboard.recentDownloads.length ? dashboard.recentDownloads.map((download) => (
                        <Stack
                          key={download.id}
                          spacing={0.5}
                          sx={{
                            p: 2.25,
                            minHeight: 100,
                            borderRadius: 1.5,
                            bgcolor: '#EEF4FF',
                            border: '1px solid rgba(37,99,235,0.12)',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                          }}
                        >
                          <Typography variant="subtitle1" fontWeight={700}>{download.appName}</Typography>
                          <Typography color="text.secondary">
                            Downloaded by {download.userName || 'User'} on {formatDate(download.downloadDate)}
                          </Typography>
                        </Stack>
                      )) : <Typography color="text.secondary" textAlign="center">No downloads recorded yet.</Typography>}
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} lg={6} sx={{ display: 'flex' }}>
              <Card sx={panelSx}>
                <CardContent sx={{ p: 3.5, height: '100%' }}>
                  <Stack spacing={2} sx={{ height: '100%' }}>
                    <Typography variant="h5" textAlign="center">
                      Recent User Comments
                    </Typography>
                    <Stack spacing={1.5} sx={{ height: '100%', justifyContent: 'flex-start' }}>
                      {dashboard.recentReviews.length ? dashboard.recentReviews.map((review) => (
                        <Stack
                          key={review.id}
                          spacing={0.5}
                          sx={{
                            p: 2.25,
                            minHeight: 100,
                            borderRadius: 1.5,
                            bgcolor: '#F5F3FF',
                            border: '1px solid rgba(124,58,237,0.12)',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                          }}
                        >
                          <Typography variant="subtitle1" fontWeight={700}>
                            {review.userName || 'User'} on {review.appName || 'Application'}
                          </Typography>
                          <Typography color="text.secondary">{review.comment}</Typography>
                        </Stack>
                      )) : <Typography color="text.secondary" textAlign="center">No comments recorded yet.</Typography>}
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </>
      ) : null}

      <Dialog open={dialogState.open} onClose={() => setDialogState({ open: false, appId: '', appName: '', version: '', message: '' })} fullWidth maxWidth="sm">
        <DialogTitle>Announce Update for {dialogState.appName}</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <TextField label="Version" value={dialogState.version} onChange={(event) => setDialogState((current) => ({ ...current, version: event.target.value }))} />
            <TextField label="Announcement message" value={dialogState.message} onChange={(event) => setDialogState((current) => ({ ...current, message: event.target.value }))} multiline minRows={4} />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogState({ open: false, appId: '', appName: '', version: '', message: '' })}>Cancel</Button>
          <Button variant="contained" onClick={handleAnnounceUpdate}>Send Update</Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}

function BoxSection({ title, children }) {
  return (
    <Card sx={panelSx}>
      <CardContent sx={{ p: { xs: 2.5, md: 3.5 } }}>
        <Stack spacing={2.5}>
          <Typography variant="h4">{title}</Typography>
          {children}
        </Stack>
      </CardContent>
    </Card>
  );
}

export default OwnerDashboard;
