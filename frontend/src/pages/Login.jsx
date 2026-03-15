import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Alert, Box, Button, Card, CardContent, Stack, TextField, Typography } from '@mui/material';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import PageHero from '../components/common/PageHero';

const loginSchema = Yup.object({
  email: Yup.string().trim().email('Enter a valid email address.').required('Email is required.'),
  password: Yup.string().min(8, 'Password must be at least 8 characters.').required('Password is required.'),
});

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: loginSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setStatus('');

      try {
        const user = await login(values);
        const nextPath = location.state?.from || (user.role === 'owner' ? '/owner' : '/apps');
        navigate(nextPath);
      } catch (submissionError) {
        setStatus(submissionError?.response?.data?.message || 'Login failed.');
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <Stack spacing={4} alignItems="center">
      <Box sx={{ width: '100%', maxWidth: 860 }}>
        <PageHero
          eyebrow="Secure Login"
          title="Find the apps you need and continue your Play Store experience."
          description="Sign in to browse apps, download updates, manage your dashboard, and access notifications from one place."
        />
      </Box>
      <Card sx={{ maxWidth: 560, mx: 'auto', width: '100%', borderRadius: 3 }}>
        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
          <Stack component="form" spacing={2.5} onSubmit={formik.handleSubmit}>
            <Typography variant="h4" textAlign="center">Login</Typography>
            {formik.status ? <Alert severity="error">{formik.status}</Alert> : null}
            <TextField
              label="Email"
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={Boolean(formik.touched.email && formik.errors.email)}
              helperText={(formik.touched.email && formik.errors.email) || 'Use the email address registered with your account.'}
              required
            />
            <TextField
              label="Password"
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={Boolean(formik.touched.password && formik.errors.password)}
              helperText={(formik.touched.password && formik.errors.password) || 'Minimum 8 characters.'}
              required
            />
            <Button type="submit" variant="contained" color="primary" disabled={formik.isSubmitting}>
              Login
            </Button>
            <Button component={RouterLink} to="/register" variant="text">
              Need an account? Register
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
}

export default Login;
