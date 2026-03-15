import { Chip, List, ListItem, ListItemText, Stack, Typography } from '@mui/material';
import { formatDate } from '../../utils/formatters';
import EmptyState from '../common/EmptyState';

function NotificationList({ notifications }) {
  if (!notifications.length) {
    return <EmptyState title="No notifications yet" description="Updates, download alerts, and announcements will appear here when activity happens." />;
  }

  return (
    <List sx={{ p: 0 }}>
      {notifications.map((notification) => (
        <ListItem
          key={notification.id}
          sx={{
            mb: 1.75,
            bgcolor: '#fff',
            borderRadius: 5,
            border: '1px solid rgba(148, 163, 184, 0.18)',
            alignItems: 'flex-start',
            px: 2.5,
            py: 2,
          }}
        >
          <ListItemText
            primary={
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} alignItems={{ xs: 'flex-start', sm: 'center' }}>
                <Typography variant="h6">{notification.title}</Typography>
                <Chip label={notification.type.replace('_', ' ')} size="small" color={notification.isRead ? 'default' : 'secondary'} sx={{ textTransform: 'capitalize' }} />
              </Stack>
            }
            secondary={
              <Stack spacing={1} mt={1}>
                <Typography color="text.primary">{notification.message}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {formatDate(notification.createdAt)}
                </Typography>
              </Stack>
            }
          />
        </ListItem>
      ))}
    </List>
  );
}

export default NotificationList;
