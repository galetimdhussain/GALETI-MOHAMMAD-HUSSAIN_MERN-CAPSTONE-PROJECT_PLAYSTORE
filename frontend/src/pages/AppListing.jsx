import { useEffect, useState } from 'react';
import { Alert, Box, Stack, Typography } from '@mui/material';
import AppCard from '../components/apps/AppCard';
import AppFilters from '../components/apps/AppFilters';
import EmptyState from '../components/common/EmptyState';
import LoadingScreen from '../components/common/LoadingScreen';
import PageHero from '../components/common/PageHero';
import appService from '../services/appService';
import categoryService from '../services/categoryService';

const initialFilters = {
  search: '',
  category: '',
  rating: '',
};

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

function AppListing() {
  const [filters, setFilters] = useState(initialFilters);
  const [apps, setApps] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  async function fetchApps(activeFilters = filters) {
    setLoading(true);
    setError('');

    try {
      const [appResponse, categoryResponse] = await Promise.all([
        appService.searchApps(activeFilters),
        categoryService.getCategories(),
      ]);
      setApps(appResponse);
      setCategories(categoryResponse);
    } catch (requestError) {
      setError(requestError?.response?.data?.message || 'Unable to load applications right now.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchApps(initialFilters);
  }, []);

  function handleChange(field, value) {
    if (field === 'reset') {
      setFilters(initialFilters);
      fetchApps(initialFilters);
      return;
    }

    setFilters((current) => ({ ...current, [field]: value }));
  }

  function handleApply(event) {
    event.preventDefault();
    fetchApps(filters);
  }

  return (
    <Stack spacing={4}>
      <PageHero
        eyebrow="Application Directory"
        title="Search the Play Store catalog by name, category, and rating."
        description="Use the filters below to explore public applications, compare quality signals, and open detailed pages for reviews, downloads, and release updates."
      />

      <AppFilters categories={categories} filters={filters} onChange={handleChange} onApply={handleApply} />

      {error ? <Alert severity="error">{error}</Alert> : null}

      {loading ? (
        <LoadingScreen minHeight="30vh" />
      ) : apps.length ? (
        <Box
          sx={{
            p: { xs: 2.5, md: 3.5 },
            borderRadius: 2,
            bgcolor: 'rgba(255,255,255,0.72)',
            border: '1px solid rgba(148,163,184,0.14)',
            boxShadow: '0 14px 40px rgba(15, 23, 42, 0.06)',
          }}
        >
          <Stack spacing={2.5}>
            <Typography color="text.secondary">
              Showing {apps.length} application{apps.length > 1 ? 's' : ''}.
            </Typography>
            <Box sx={publicGridSx}>
              {apps.map((app) => (
                <Box key={app.id} sx={{ display: 'flex' }}>
                  <AppCard app={app} />
                </Box>
              ))}
            </Box>
          </Stack>
        </Box>
      ) : (
        <EmptyState title="No applications matched your filters" description="Try clearing one of the filters or search using a broader application name." />
      )}
    </Stack>
  );
}

export default AppListing;
