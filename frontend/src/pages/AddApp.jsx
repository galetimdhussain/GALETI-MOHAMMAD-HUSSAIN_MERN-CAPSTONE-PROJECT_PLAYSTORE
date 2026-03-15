import { useEffect, useState } from 'react';
import { Alert, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AppForm from '../components/apps/AppForm';
import LoadingScreen from '../components/common/LoadingScreen';
import PageHero from '../components/common/PageHero';
import appService from '../services/appService';
import categoryService from '../services/categoryService';

function AddApp() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadCategories() {
      try {
        const categoryResponse = await categoryService.getCategories();
        setCategories(categoryResponse);
      } catch (requestError) {
        setError(requestError?.response?.data?.message || 'Unable to load categories.');
      } finally {
        setLoading(false);
      }
    }

    loadCategories();
  }, []);

  async function handleSubmit(payload) {
    await appService.createApp(payload);
    navigate('/owner');
  }

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Stack spacing={4}>
      <PageHero
        eyebrow="Owner CRUD"
        title="Create a new application listing."
        description="Owners can publish new apps with category, genre, visibility, release date, and feature highlights."
      />
      {error ? <Alert severity="error">{error}</Alert> : null}
      <AppForm categories={categories} onSubmit={handleSubmit} submitLabel="Create Application" />
    </Stack>
  );
}

export default AddApp;
