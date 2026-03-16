import { useEffect, useMemo, useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import LoadingScreen from '../components/common/LoadingScreen';
import EmptyState from '../components/common/EmptyState';
import PageHero from '../components/common/PageHero';
import userService from '../services/userService';

const tableHeaderSx = {
  bgcolor: 'rgba(219, 234, 254, 0.72)',
  '& th': {
    color: '#0F172A',
    fontWeight: 800,
    borderBottom: '1px solid rgba(148,163,184,0.18)',
  },
};

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [feedback, setFeedback] = useState({ type: '', message: '' });
  const [activeAction, setActiveAction] = useState({ userId: '', type: '' });

  async function loadUsers() {
    setLoading(true);
    setFeedback((current) => (current.type === 'error' ? { type: '', message: '' } : current));

    try {
      const data = await userService.getUsers();
      setUsers(data);
    } catch (error) {
      setFeedback({ type: 'error', message: error?.response?.data?.message || 'Unable to load registered users.' });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);

  async function handlePromote(user) {
    setActiveAction({ userId: user.id, type: 'promote' });
    setFeedback({ type: '', message: '' });

    try {
      const updatedUser = await userService.promoteToOwner(user.id);
      setUsers((current) => current.map((item) => (item.id === updatedUser.id ? updatedUser : item)));
      setFeedback({ type: 'success', message: `${updatedUser.name} was promoted to owner successfully.` });
    } catch (error) {
      setFeedback({ type: 'error', message: error?.response?.data?.message || 'Unable to update the user role.' });
    } finally {
      setActiveAction({ userId: '', type: '' });
    }
  }

  async function handleDelete(user) {
    const confirmed = window.confirm(`Delete ${user.name}? This will remove the user account and that user's reviews and downloads.`);

    if (!confirmed) {
      return;
    }

    setActiveAction({ userId: user.id, type: 'delete' });
    setFeedback({ type: '', message: '' });

    try {
      await userService.deleteUser(user.id);
      setUsers((current) => current.filter((item) => item.id !== user.id));
      setFeedback({ type: 'success', message: `${user.name} was deleted successfully.` });
    } catch (error) {
      setFeedback({ type: 'error', message: error?.response?.data?.message || 'Unable to delete the selected user.' });
    } finally {
      setActiveAction({ userId: '', type: '' });
    }
  }

  const sortedUsers = useMemo(
    () => [...users].sort((left, right) => left.name.localeCompare(right.name)),
    [users]
  );

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Stack spacing={4}>
      <PageHero
        eyebrow="Owner Controls"
        compact
        title="User Management"
        description="Review every registered account, monitor current roles, promote eligible users to owner, and safely remove user accounts when needed."
      />

      {feedback.message ? <Alert severity={feedback.type || 'info'}>{feedback.message}</Alert> : null}

      <Card
        sx={{
          borderRadius: 2,
          background: 'linear-gradient(180deg, rgba(255,255,255,0.96), rgba(248,250,252,0.94))',
        }}
      >
        <CardContent sx={{ p: { xs: 2.5, md: 3.5 } }}>
          <Stack spacing={2.5}>
            <Box>
              <Typography variant="h4">Registered Users</Typography>
              <Typography color="text.secondary">
                Users can be promoted to owner or removed. Existing owner accounts stay locked.
              </Typography>
            </Box>

            {sortedUsers.length ? (
              <TableContainer
                sx={{
                  borderRadius: 2,
                  border: '1px solid rgba(148,163,184,0.16)',
                  overflowX: 'auto',
                }}
              >
                <Table sx={{ minWidth: 760 }}>
                  <TableHead sx={tableHeaderSx}>
                    <TableRow>
                      <TableCell>User ID</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Role</TableCell>
                      <TableCell align="right">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {sortedUsers.map((user) => {
                      const isOwner = user.role === 'owner';
                      const isBusy = activeAction.userId === user.id;
                      const isPromoting = isBusy && activeAction.type === 'promote';
                      const isDeleting = isBusy && activeAction.type === 'delete';

                      return (
                        <TableRow
                          key={user.id}
                          hover
                          sx={{
                            '& td': {
                              borderBottom: '1px solid rgba(226,232,240,0.88)',
                              verticalAlign: 'middle',
                            },
                          }}
                        >
                          <TableCell sx={{ fontFamily: 'monospace', color: 'text.secondary' }}>{user.id}</TableCell>
                          <TableCell sx={{ fontWeight: 700 }}>{user.name}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>
                            <Chip
                              label={user.role}
                              sx={{
                                textTransform: 'capitalize',
                                bgcolor: isOwner ? '#FDE68A' : '#DBEAFE',
                                color: '#0F172A',
                                fontWeight: 700,
                              }}
                            />
                          </TableCell>
                          <TableCell align="right">
                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.25} justifyContent="flex-end">
                              {isOwner ? (
                                <Button variant="outlined" color="warning" disabled>
                                  Already Owner
                                </Button>
                              ) : (
                                <>
                                  <Button
                                    variant="contained"
                                    color="success"
                                    onClick={() => handlePromote(user)}
                                    disabled={isBusy}
                                    sx={{
                                      minWidth: 170,
                                      boxShadow: '0 10px 24px rgba(22, 163, 74, 0.2)',
                                    }}
                                  >
                                    {isPromoting ? 'Updating...' : 'Promote to Owner'}
                                  </Button>
                                  <Button
                                    variant="contained"
                                    color="error"
                                    onClick={() => handleDelete(user)}
                                    disabled={isBusy}
                                    sx={{
                                      minWidth: 130,
                                      boxShadow: '0 10px 24px rgba(220, 38, 38, 0.18)',
                                    }}
                                  >
                                    {isDeleting ? 'Deleting...' : 'Delete User'}
                                  </Button>
                                </>
                              )}
                            </Stack>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
              <EmptyState title="No registered users found" description="Create or seed accounts to start managing user roles from this panel." />
            )}
          </Stack>
        </CardContent>
      </Card>

    </Stack>
  );
}

export default UserManagement;
