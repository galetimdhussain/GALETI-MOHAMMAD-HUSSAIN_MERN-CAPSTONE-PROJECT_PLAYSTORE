import { useEffect, useState } from 'react';
import { Alert, Stack } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import AppForm from '../components/apps/AppForm';
import LoadingScreen from '../components/common/LoadingScreen';
import PageHero from '../components/common/PageHero';
import appService from '../services/appService';
import categoryService from '../services/categoryService';

function EditApp() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [initialValues, setInitialValues] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadData() {
      try {
        const [categoryResponse, appResponse] = await Promise.all([
          categoryService.getCategories(),
          appService.getAppById(id),
        ]);
        setCategories(categoryResponse);
        setInitialValues({
          ...appResponse,
          category: appResponse.category?.id || appResponse.category,
          releaseDate: appResponse.releaseDate ? new Date(appResponse.releaseDate).toISOString().split('T')[0] : '',
          featureHighlights: (appResponse.featureHighlights || []).join(', '),
        });
      } catch (requestError) {
        setError(requestError?.response?.data?.message || 'Unable to load application data.');
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [id]);

  async function handleSubmit(payload) {
    await appService.updateApp(id, payload);
    navigate('/owner');
  }

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Stack spacing={4}>
      <PageHero
        eyebrow="Owner CRUD"
        title="Edit application details and visibility."
        description="Owners can maintain release details, category, genre, feature highlights, and publish status from this form."
      />
      {error ? <Alert severity="error">{error}</Alert> : null}
      {initialValues ? <AppForm categories={categories} initialValues={initialValues} onSubmit={handleSubmit} submitLabel="Save Changes" /> : null}
    </Stack>
  );
}

export default EditApp;
