import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Divider,
  Rating,
  Stack,
  Typography,
} from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import { Link as RouterLink } from 'react-router-dom';
import { formatDate, formatRating } from '../../utils/formatters';

const fallbackImage = 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80';

function AppCard({ app, ownerMode = false, onToggleVisibility, onDelete, onAnnounce }) {
  return (
    <Card
      sx={{
        width: '100%',
        height: ownerMode ? { xs: 760, md: 700 } : { xs: 'auto', sm: 560, md: 535 },
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        overflow: 'hidden',
        bgcolor: 'background.paper',
        transition: 'transform 0.22s ease, box-shadow 0.22s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 24px 58px rgba(15, 23, 42, 0.14)',
        },
      }}
    >
      <Box sx={{ p: { xs: 1.5, sm: 2 }, pb: 0 }}>
        <Box
          sx={{
            position: 'relative',
            height: ownerMode ? 250 : { xs: 190, sm: 220 },
            borderRadius: 1.5,
            overflow: 'hidden',
            border: '1px solid rgba(148, 163, 184, 0.12)',
            background: 'linear-gradient(145deg, rgba(219,234,254,0.95) 0%, rgba(237,233,254,0.92) 54%, rgba(240,249,255,0.96) 100%)',
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            sx={{
              position: 'absolute',
              top: 12,
              left: 12,
              right: 12,
              justifyContent: ownerMode ? 'space-between' : 'flex-start',
              flexWrap: 'wrap',
              zIndex: 1,
            }}
          >
            <Chip
              label={app.category?.name || 'Category'}
              size="small"
              sx={{
                bgcolor: '#F8FAFC',
                color: '#0F172A',
                border: '1px solid rgba(37,99,235,0.14)',
                maxWidth: '100%',
              }}
            />
            {ownerMode ? (
              <Chip
                label={app.visibility}
                size="small"
                sx={{
                  textTransform: 'capitalize',
                  bgcolor: app.visibility === 'public' ? '#DCFCE7' : '#E2E8F0',
                  color: '#0F172A',
                }}
              />
            ) : null}
          </Stack>

          <Box
            sx={{
              height: '100%',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: { xs: 1.25, sm: 1.5 },
            }}
          >
            <Box
              component="img"
              src={app.iconUrl || fallbackImage}
              alt={app.name}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                filter: 'drop-shadow(0 18px 24px rgba(37, 99, 235, 0.16))',
              }}
            />
          </Box>
        </Box>
      </Box>

      <CardContent sx={{ flexGrow: 1, px: { xs: 1.75, sm: 2.25 }, pt: 2.25, pb: 1.5 }}>
        <Stack spacing={1.5} sx={{ height: '100%', minWidth: 0 }}>
          <Box sx={{ minWidth: 0 }}>
            <Typography variant="h5" sx={{ mb: 0.75, minHeight: { xs: 'auto', sm: 32 }, overflowWrap: 'anywhere' }}>
              {app.name}
            </Typography>
            <Typography
              color="text.secondary"
              sx={{
                minHeight: { xs: 'auto', sm: 72 },
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                wordBreak: 'break-word',
              }}
            >
              {app.description}
            </Typography>
          </Box>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1}
            alignItems={{ xs: 'flex-start', sm: 'center' }}
            justifyContent="space-between"
          >
            <Stack direction="row" spacing={1} alignItems="center" sx={{ minWidth: 0, flexWrap: 'wrap' }} useFlexGap>
              <Rating value={Number(app.rating || 0)} precision={0.5} readOnly size="small" />
              <Typography variant="body2" color="text.secondary">
                {formatRating(app.rating)}
              </Typography>
            </Stack>
            <Chip icon={<DownloadOutlinedIcon />} label={app.downloadCount || 0} size="small" variant="outlined" />
          </Stack>

          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            <Chip label={app.genre} size="small" variant="outlined" />
            <Chip label={`Version ${app.version}`} size="small" variant="outlined" />
            <Chip label={formatDate(app.releaseDate)} size="small" variant="outlined" />
          </Stack>
        </Stack>
      </CardContent>

      <Divider sx={{ mx: { xs: 1.75, sm: 2.25 } }} />

      <CardActions sx={{ px: { xs: 1.75, sm: 2.25 }, py: 2, flexWrap: 'wrap', gap: 1, alignItems: 'stretch' }}>
        <Button
          component={RouterLink}
          to={`/apps/${app.id}`}
          variant="contained"
          color="primary"
          sx={{ minWidth: ownerMode ? 148 : '100%' }}
        >
          View Details
        </Button>
        {ownerMode ? (
          <>
            <Button component={RouterLink} to={`/owner/apps/${app.id}/edit`} startIcon={<EditOutlinedIcon />} variant="outlined" sx={{ minWidth: 110 }}>
              Edit
            </Button>
            <Button onClick={() => onToggleVisibility(app)} startIcon={<VisibilityOffOutlinedIcon />} variant="outlined" sx={{ minWidth: 110 }}>
              {app.visibility === 'public' ? 'Hide' : 'Unhide'}
            </Button>
            <Button onClick={() => onAnnounce(app)} startIcon={<CampaignOutlinedIcon />} variant="outlined" sx={{ minWidth: 118 }}>
              Update
            </Button>
            <Button color="error" onClick={() => onDelete(app)} startIcon={<DeleteOutlineOutlinedIcon />} variant="outlined" sx={{ minWidth: 118 }}>
              Delete
            </Button>
          </>
        ) : null}
      </CardActions>
    </Card>
  );
}

export default AppCard;
