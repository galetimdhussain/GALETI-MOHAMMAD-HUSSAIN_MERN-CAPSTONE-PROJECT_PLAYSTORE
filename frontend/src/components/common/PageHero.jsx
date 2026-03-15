import { Box, Chip, Stack, Typography } from '@mui/material';

function PageHero({ eyebrow, title, description, actions = null, compact = false, fullWidthText = false }) {
  return (
    <Box
      sx={{
        mb: 3,
        p: compact ? { xs: 2.75, md: 3.25 } : { xs: 3.5, md: 5 },
        borderRadius: 2.5,
        color: '#ffffff',
        background: 'linear-gradient(140deg, #0F172A 0%, #172554 28%, #2563EB 66%, #7C3AED 100%)',
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.08)',
        minHeight: compact ? { xs: 160, md: 182 } : { xs: 220, md: 280 },
        display: 'flex',
        alignItems: 'center',
        boxShadow: '0 24px 60px rgba(30, 41, 59, 0.18)',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 12% 20%, rgba(255,255,255,0.16), transparent 18%), radial-gradient(circle at 84% 22%, rgba(255,255,255,0.12), transparent 20%), radial-gradient(circle at 50% 120%, rgba(56,189,248,0.16), transparent 24%), linear-gradient(180deg, rgba(255,255,255,0.03), transparent 46%)',
        }}
      />
      <Stack spacing={compact ? 1 : 1.75} sx={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <Chip
          label={eyebrow}
          sx={{
            alignSelf: 'flex-start',
            bgcolor: 'rgba(255,255,255,0.12)',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.12)',
            px: 0.75,
          }}
        />
        <Typography
          variant="h2"
          sx={{
            maxWidth: fullWidthText ? '100%' : compact ? 760 : 860,
            lineHeight: compact ? 1.12 : 1.08,
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            maxWidth: fullWidthText ? '100%' : compact ? 700 : 760,
            opacity: 0.94,
            fontSize: { xs: '0.95rem', md: compact ? '0.98rem' : '1.04rem' },
            lineHeight: 1.6,
          }}
        >
          {description}
        </Typography>
        {actions ? <Box sx={{ pt: compact ? 0.25 : 1 }}>{actions}</Box> : null}
      </Stack>
    </Box>
  );
}

export default PageHero;
