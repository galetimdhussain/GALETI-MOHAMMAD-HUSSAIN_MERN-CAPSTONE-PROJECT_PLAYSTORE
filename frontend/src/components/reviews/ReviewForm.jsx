import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Alert, Button, Card, CardContent, MenuItem, Stack, TextField, Typography } from '@mui/material';

const reviewSchema = Yup.object({
  rating: Yup.number().min(1).max(5).required('Rating is required.'),
  comment: Yup.string().trim().min(10, 'Please write at least 10 characters so the review is meaningful.').required('Please add a comment before submitting your review.'),
});

function ReviewForm({ appId, onSubmit }) {
  const formik = useFormik({
    initialValues: { rating: 5, comment: '' },
    validationSchema: reviewSchema,
    onSubmit: async (values, { resetForm, setStatus, setSubmitting }) => {
      setStatus('');

      try {
        await onSubmit({
          appId,
          rating: Number(values.rating),
          comment: values.comment,
        });
        resetForm();
      } catch (submissionError) {
        setStatus(submissionError?.response?.data?.message || 'Unable to submit your review.');
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <Card sx={{ borderRadius: 6 }}>
      <CardContent sx={{ p: 3 }}>
        <Stack component="form" spacing={2} onSubmit={formik.handleSubmit}>
          <Typography variant="h4">Write a review</Typography>
          <Typography color="text.secondary">
            Rate the app and share specific feedback about its quality, usability, or features.
          </Typography>
          {formik.status ? <Alert severity="error">{formik.status}</Alert> : null}
          <TextField
            select
            label="Rating"
            name="rating"
            value={formik.values.rating}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.rating && formik.errors.rating)}
            helperText={(formik.touched.rating && formik.errors.rating) || 'Choose a rating from 1 to 5 stars.'}
          >
            {[5, 4, 3, 2, 1].map((rating) => (
              <MenuItem key={rating} value={rating}>
                {rating} star{rating > 1 ? 's' : ''}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Comment"
            name="comment"
            value={formik.values.comment}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.comment && formik.errors.comment)}
            helperText={(formik.touched.comment && formik.errors.comment) || 'Minimum 10 characters. Mention what worked well or what can improve.'}
            multiline
            minRows={4}
            placeholder="Example: Clean UI, fast performance, and useful notifications."
          />
          <Button type="submit" variant="contained" color="primary" disabled={formik.isSubmitting}>
            Submit Review
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ReviewForm;
