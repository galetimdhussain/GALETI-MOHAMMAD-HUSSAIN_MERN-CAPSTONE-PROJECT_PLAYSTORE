import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Alert, Box, Button, Card, CardContent, Stack, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import PageHero from '../components/common/PageHero';

const registerSchema = Yup.object({
  name: Yup.string().trim().required('Full name is required.'),
  email: Yup.string().trim().email('Enter a valid email address.').required('Email is required.'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters.')
    .matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Include uppercase, lowercase, and a number.')
    .required('Password is required.'),
  role: Yup.string().oneOf(['user']).required('Role is required.'),
});

function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      role: 'user',
    },
    validationSchema: registerSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setStatus('');

      try {
        await register({ ...values, role: 'user' });
        navigate('/apps');
      } catch (submissionError) {
        setStatus(submissionError?.response?.data?.message || 'Registration failed.');
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <Stack spacing={4} alignItems="center">
      <Box sx={{ width: '100%', maxWidth: 920 }}>
        <PageHero
          eyebrow="Account Registration"
          title="Create a user account with clear validation and secure access."
          description="Enter a valid email address and a strong password to start exploring the platform immediately with a standard user account."
        />
      </Box>
      <Card sx={{ maxWidth: 620, mx: 'auto', width: '100%', borderRadius: 2 }}>
        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
          <Stack component="form" spacing={2.5} onSubmit={formik.handleSubmit}>
            <Typography variant="h4" textAlign="center">Register</Typography>
            {formik.status ? <Alert severity="error">{formik.status}</Alert> : null}
            <TextField
              label="Full name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={Boolean(formik.touched.name && formik.errors.name)}
              helperText={(formik.touched.name && formik.errors.name) || 'Enter your display name for the platform.'}
              required
            />
            <TextField
              label="Email"
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={Boolean(formik.touched.email && formik.errors.email)}
              helperText={(formik.touched.email && formik.errors.email) || 'Use a valid email address such as name@example.com.'}
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
              helperText={(formik.touched.password && formik.errors.password) || 'Minimum 8 characters with uppercase, lowercase, and one number.'}
              required
            />
            <TextField
              label="Role"
              name="role"
              value="User"
              disabled
              helperText="Registration is locked to the user role for this submission build."
            />
            <Button type="submit" variant="contained" color="primary" disabled={formik.isSubmitting}>
              Create Account
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
}

export default Register;
