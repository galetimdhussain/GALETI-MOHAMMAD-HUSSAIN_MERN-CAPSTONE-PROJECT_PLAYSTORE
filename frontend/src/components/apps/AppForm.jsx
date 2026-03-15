import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Alert, Button, Card, CardContent, Grid, MenuItem, Stack, TextField, Typography } from '@mui/material';

const defaultValues = {
  name: '',
  description: '',
  version: '',
  releaseDate: '',
  category: '',
  genre: '',
  visibility: 'public',
  iconUrl: '',
  featureHighlights: '',
};

const appSchema = Yup.object({
  name: Yup.string().trim().required('Application name is required.'),
  description: Yup.string().trim().min(10, 'Description must be at least 10 characters.').required('Description is required.'),
  version: Yup.string().trim().required('Version is required.'),
  releaseDate: Yup.string().required('Release date is required.'),
  category: Yup.string().required('Select a category.'),
  genre: Yup.string().trim().required('Genre is required.'),
  visibility: Yup.string().oneOf(['public', 'hidden']).required('Visibility is required.'),
  iconUrl: Yup.string()
    .test('is-valid-url', 'Enter a valid image URL.', (value) => {
      if (!value || !value.trim()) {
        return true;
      }

      try {
        new URL(value);
        return true;
      } catch (error) {
        return false;
      }
    }),
  featureHighlights: Yup.string(),
});

function AppForm({ categories, initialValues, onSubmit, loading = false, submitLabel = 'Save Application' }) {
  const formik = useFormik({
    initialValues: { ...defaultValues, ...initialValues },
    enableReinitialize: true,
    validationSchema: appSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setStatus('');

      try {
        await onSubmit({
          ...values,
          featureHighlights: values.featureHighlights
            ? values.featureHighlights
                .split(',')
                .map((item) => item.trim())
                .filter(Boolean)
            : [],
        });
      } catch (submissionError) {
        setStatus(submissionError?.response?.data?.message || 'Unable to save the application.');
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <Card sx={{ borderRadius: 2 }}>
      <CardContent sx={{ p: { xs: 2.5, md: 3.5 } }}>
        <Stack component="form" spacing={3} onSubmit={formik.handleSubmit}>
          <Stack spacing={0.5}>
            <Typography variant="h4">Application Details</Typography>
            <Typography color="text.secondary">
              Complete the fields below to publish or update an application listing.
            </Typography>
          </Stack>
          {formik.status ? <Alert severity="error">{formik.status}</Alert> : null}
          <Grid container spacing={2.5}>
            <Grid item xs={12} md={7}>
              <TextField
                label="Application name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={Boolean(formik.touched.name && formik.errors.name)}
                helperText={(formik.touched.name && formik.errors.name) || 'Enter the public app name shown to users.'}
                required
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <TextField
                label="Version"
                name="version"
                value={formik.values.version}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={Boolean(formik.touched.version && formik.errors.version)}
                helperText={(formik.touched.version && formik.errors.version) || 'Example: 2.3.1'}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={Boolean(formik.touched.description && formik.errors.description)}
                helperText={(formik.touched.description && formik.errors.description) || 'Summarize the app clearly for users and evaluators.'}
                multiline
                minRows={4}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="date"
                label="Release date"
                name="releaseDate"
                value={formik.values.releaseDate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={Boolean(formik.touched.releaseDate && formik.errors.releaseDate)}
                helperText={(formik.touched.releaseDate && formik.errors.releaseDate) || 'Choose the current or planned release date.'}
                required
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                select
                label="Category"
                name="category"
                value={formik.values.category}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={Boolean(formik.touched.category && formik.errors.category)}
                helperText={(formik.touched.category && formik.errors.category) || 'Select the catalog category shown in filters.'}
                required
              >
                {categories.map((category) => (
                  <MenuItem key={category.id} value={category.id}>
                    {category.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Genre"
                name="genre"
                value={formik.values.genre}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={Boolean(formik.touched.genre && formik.errors.genre)}
                helperText={(formik.touched.genre && formik.errors.genre) || 'Example: Messaging, Arcade, Productivity'}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Visibility"
                select
                name="visibility"
                value={formik.values.visibility}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={Boolean(formik.touched.visibility && formik.errors.visibility)}
                helperText={(formik.touched.visibility && formik.errors.visibility) || 'Public apps appear to users. Hidden apps stay owner-only.'}
              >
                <MenuItem value="public">Public</MenuItem>
                <MenuItem value="hidden">Hidden</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Icon URL"
                name="iconUrl"
                value={formik.values.iconUrl}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={Boolean(formik.touched.iconUrl && formik.errors.iconUrl)}
                helperText={(formik.touched.iconUrl && formik.errors.iconUrl) || 'Optional. Use a public image URL for the app card and detail page.'}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Feature highlights"
                name="featureHighlights"
                value={formik.values.featureHighlights}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Comma separated values, for example: Daily quests, Smart sync, Dark charts"
                helperText="Separate feature names with commas."
              />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" color="primary" disabled={loading || formik.isSubmitting} sx={{ alignSelf: 'flex-start' }}>
            {submitLabel}
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default AppForm;
