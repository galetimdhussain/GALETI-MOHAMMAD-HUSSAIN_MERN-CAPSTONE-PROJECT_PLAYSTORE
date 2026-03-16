import { useEffect, useState } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import AppCard from '../components/apps/AppCard';
import LoadingScreen from '../components/common/LoadingScreen';
import EmptyState from '../components/common/EmptyState';
import PageHero from '../components/common/PageHero';
import appService from '../services/appService';

const publicGridSx = {
  display: 'grid',
  gridTemplateColumns: {
    xs: '1fr',
    sm: 'repeat(2, minmax(0, 1fr))',
    md: 'repeat(3, minmax(0, 1fr))',
  },
  gap: { xs: 2.5, md: 3 },
  alignItems: 'stretch',
};

function Home() {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadHomeData() {
      try {
        const appsResponse = await appService.getApps();
        setApps(appsResponse.slice(0, 6));
      } catch (error) {
        setApps([]);
      } finally {
        setLoading(false);
      }
    }

    loadHomeData();
  }, []);

  return (
    <Stack spacing={4.5}>
      <PageHero
        compact
        fullWidthText
        eyebrow="Curated App Marketplace"
        title="Discover reliable apps for communication, gaming, health, fashion, and productivity."
        description="Search the catalog, compare ratings, open detailed app pages, and follow updates from application owners in a clean single-page experience."
        actions={
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
            <Button component={RouterLink} to="/apps" variant="contained" color="secondary">
              Explore Applications
            </Button>
            <Button
              component={RouterLink}
              to="/register"
              variant="outlined"
              sx={{ color: '#fff', borderColor: 'rgba(255,255,255,0.45)' }}
            >
              Create Account
            </Button>
          </Stack>
        }
      />

      <Box
        sx={{
          p: { xs: 2.5, md: 3.5 },
          borderRadius: 2,
          bgcolor: 'rgba(255,255,255,0.72)',
          border: '1px solid rgba(148,163,184,0.14)',
          boxShadow: '0 14px 40px rgba(15, 23, 42, 0.06)',
        }}
      >
        <Stack spacing={2.75}>
          <Box>
            <Typography variant="h3">Featured Applications</Typography>
            <Typography color="text.secondary">
              Public applications currently available in the store.
            </Typography>
          </Box>

          {loading ? (
            <LoadingScreen minHeight="20vh" message="Loading featured applications..." />
          ) : apps.length ? (
            <Box sx={publicGridSx}>
              {apps.map((app) => (
                <Box key={app.id} sx={{ display: 'flex' }}>
                  <AppCard app={app} />
                </Box>
              ))}
            </Box>
          ) : (
            <EmptyState title="Seed data not loaded yet" description="Run the database seed script to populate demo applications for evaluators." />
          )}
        </Stack>
      </Box>
    </Stack>
  );
}

export default Home;
