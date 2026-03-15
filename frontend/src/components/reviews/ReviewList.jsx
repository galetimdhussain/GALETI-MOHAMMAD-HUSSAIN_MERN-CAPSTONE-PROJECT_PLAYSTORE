import { Card, CardContent, Rating, Stack, Typography } from '@mui/material';
import { formatDate } from '../../utils/formatters';
import EmptyState from '../common/EmptyState';

function ReviewList({ reviews }) {
  if (!reviews.length) {
    return <EmptyState title="No reviews yet" description="Be the first user to share feedback about this application." />;
  }

  return (
    <Stack spacing={2}>
      {reviews.map((review) => (
        <Card key={review.id} sx={{ borderRadius: 4 }}>
          <CardContent>
            <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" spacing={2}>
              <div>
                <Typography variant="h6">{review.userName || 'Play Store User'}</Typography>
                <Typography color="text.secondary" variant="body2">
                  {formatDate(review.timestamp)}
                </Typography>
              </div>
              <Rating value={Number(review.rating)} readOnly />
            </Stack>
            <Typography mt={2}>{review.comment}</Typography>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
}

export default ReviewList;
