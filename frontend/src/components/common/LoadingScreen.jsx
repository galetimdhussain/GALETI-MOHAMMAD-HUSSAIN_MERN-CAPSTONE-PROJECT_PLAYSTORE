import { Box, CircularProgress, Typography } from '@mui/material';

function LoadingScreen({ minHeight = '70vh', message = 'Loading Play Store data...' }) {
  return (
    <Box
      sx={{
        minHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <CircularProgress color="primary" />
      <Typography color="text.secondary">{message}</Typography>
    </Box>
  );
}

export default LoadingScreen;
