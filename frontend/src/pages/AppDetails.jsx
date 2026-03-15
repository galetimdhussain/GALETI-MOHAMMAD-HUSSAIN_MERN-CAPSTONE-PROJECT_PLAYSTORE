import { useEffect, useState } from 'react';
import {
  Alert,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Grid,
  Rating,
  Stack,
  Typography,
  Box,
} from '@mui/material';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Link as RouterLink, useParams } from 'react-router-dom';
import ReviewForm from '../components/reviews/ReviewForm';
import ReviewList from '../components/reviews/ReviewList';
import LoadingScreen from '../components/common/LoadingScreen';
import PageHero from '../components/common/PageHero';
import appService from '../services/appService';
import reviewService from '../services/reviewService';
import downloadService from '../services/downloadService';
import useAuth from '../hooks/useAuth';
import { formatDate, formatRating } from '../utils/formatters';

const fallbackImage = 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80';

function AppDetails() {
  const { id } = useParams();
  const { user, isAuthenticated } = useAuth();
  const [app, setApp] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [feedback, setFeedback] = useState({ type: '', message: '' });

  async function loadAppDetails() {
    setLoading(true);
    try {
      const [appResponse, reviewResponse] = await Promise.all([
        appService.getAppById(id),
        reviewService.getReviewsByApp(id),
      ]);
      setApp(appResponse);
      setReviews(reviewResponse);
    } catch (error) {
      setFeedback({ type: 'error', message: error?.response?.data?.message || 'Unable to load application details.' });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadAppDetails();
  }, [id]);

  async function handleReviewSubmit(payload) {
    await reviewService.createReview(payload);
    setFeedback({ type: 'success', message: 'Review submitted successfully.' });
    await loadAppDetails();
  }

  async function handleDownload() {
    try {
      await downloadService.downloadApp(id);
      setFeedback({ type: 'success', message: 'Application downloaded successfully. You will now receive update notifications.' });
      await loadAppDetails();
    } catch (error) {
      setFeedback({ type: 'error', message: error?.response?.data?.message || 'Unable to download this application.' });
    }
  }

  if (loading) {
    return <LoadingScreen />;
  }

  if (!app) {
    return <Alert severity="error">{feedback.message || 'Application not found.'}</Alert>;
  }

  const isOwner = user?.role === 'owner' && user?.id === app.ownerId;

  return (
    <Stack spacing={4}>
      <PageHero eyebrow={app.category?.name || 'Application'} title={app.name} description={app.description} compact />

      {feedback.message ? <Alert severity={feedback.type || 'info'}>{feedback.message}</Alert> : null}

      <Grid container spacing={3} alignItems="stretch">
        <Grid item xs={12} lg={8} sx={{ display: 'flex' }}>
          <Card sx={{ borderRadius: 2, overflow: 'hidden', height: '100%', width: '100%' }}>
            <Grid container sx={{ height: '100%' }}>
              <Grid item xs={12} md={5} sx={{ minHeight: { xs: 300, md: '100%' } }}>
                <CardMedia component="img" image={app.iconUrl || fallbackImage} alt={app.name} sx={{ minHeight: 360, height: '100%', objectFit: 'cover' }} />
              </Grid>
              <Grid item xs={12} md={7}>
                <CardContent sx={{ p: 4, height: '100%', display: 'flex' }}>
                  <Stack spacing={2.5} sx={{ width: '100%', justifyContent: 'space-between' }}>
                    <Stack spacing={2.5}>
                      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                        <Chip label={app.category?.name || 'Category'} color="primary" />
                        <Chip label={app.genre} variant="outlined" />
                        <Chip label={`Version ${app.version}`} variant="outlined" />
                      </Stack>
                      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems={{ xs: 'flex-start', sm: 'center' }}>
                        <Rating value={Number(app.rating || 0)} readOnly precision={0.5} />
                        <Typography color="text.secondary">
                          {formatRating(app.rating)} average from {app.reviewCount} review(s)
                        </Typography>
                      </Stack>
                      <Grid container spacing={2.5}>
                        <Grid item xs={6}>
                          <Typography color="text.secondary" variant="body2">Release Date</Typography>
                          <Typography variant="h6">{formatDate(app.releaseDate)}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography color="text.secondary" variant="body2">Downloads</Typography>
                          <Typography variant="h6">{app.downloadCount}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography color="text.secondary" variant="body2">Owner</Typography>
                          <Typography variant="h6">{app.ownerName || 'Play Store Owner'}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography color="text.secondary" variant="body2">Visibility</Typography>
                          <Typography variant="h6" sx={{ textTransform: 'capitalize' }}>{app.visibility}</Typography>
                        </Grid>
                      </Grid>
                    </Stack>
                    <Stack spacing={2}>
                      <Divider />
                      <Stack direction="row" spacing={1.25} flexWrap="wrap" useFlexGap>
                        {(app.featureHighlights?.length ? app.featureHighlights : ['Secure authentication', 'Responsive design', 'Notification support']).map((feature) => (
                          <Chip key={feature} label={feature} variant="outlined" color="secondary" />
                        ))}
                      </Stack>
                    </Stack>
                  </Stack>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>

        <Grid item xs={12} lg={4} sx={{ display: 'flex' }}>
          <Card sx={{ borderRadius: 2, width: '100%' }}>
            <CardContent sx={{ p: 3.5 }}>
              <Stack spacing={2.25}>
                <Typography variant="h4">Actions</Typography>
                {user?.role === 'user' ? (
                  <Button variant="contained" color="secondary" startIcon={<DownloadOutlinedIcon />} onClick={handleDownload}>
                    Download Application
                  </Button>
                ) : null}
                {isOwner ? (
                  <Button component={RouterLink} to={`/owner/apps/${app.id}/edit`} variant="outlined" startIcon={<EditOutlinedIcon />}>
                    Edit Application
                  </Button>
                ) : null}
                {!isAuthenticated ? (
                  <Alert severity="info">Login as a user to download this app and submit a review.</Alert>
                ) : null}
                {app.lastAnnouncement ? <Alert severity="success">Latest update: {app.lastAnnouncement}</Alert> : null}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ width: '100%', maxWidth: 920, mx: 'auto' }}>
        {isAuthenticated && user?.role === 'user' ? (
          <ReviewForm appId={app.id} onSubmit={handleReviewSubmit} />
        ) : (
          <Alert severity="info">Only users can submit reviews.</Alert>
        )}
      </Box>

      <Stack spacing={2}>
        <Typography variant="h4">User Reviews</Typography>
        <ReviewList reviews={reviews} />
      </Stack>
    </Stack>
  );
}

export default AppDetails;
