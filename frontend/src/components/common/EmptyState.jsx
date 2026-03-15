import { Alert, Box, Button, Stack, Typography } from '@mui/material';

function EmptyState({ title, description, actionLabel, onAction, severity = 'info' }) {
  return (
    <Alert severity={severity} sx={{ borderRadius: 4, py: 2 }}>
      <Stack spacing={1}>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
        {actionLabel ? (
          <Box>
            <Button variant="contained" onClick={onAction}>
              {actionLabel}
            </Button>
          </Box>
        ) : null}
      </Stack>
    </Alert>
  );
}

export default EmptyState;
