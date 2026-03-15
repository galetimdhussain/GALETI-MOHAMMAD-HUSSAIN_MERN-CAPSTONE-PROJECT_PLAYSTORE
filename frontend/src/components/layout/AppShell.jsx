import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function NavButton({ to, label }) {
  const location = useLocation();
  const isActive = location.pathname === to || location.pathname.startsWith(`${to}/`);

  return (
    <Button
      component={RouterLink}
      to={to}
      color="inherit"
      sx={{
        borderRadius: 1.5,
        bgcolor: isActive ? 'rgba(255,255,255,0.12)' : 'transparent',
        border: '1px solid rgba(255,255,255,0.08)',
        color: '#E2E8F0',
        px: 2.25,
        py: 1,
        minWidth: 'auto',
        justifyContent: 'flex-start',
        '&:hover': {
          bgcolor: 'rgba(255,255,255,0.16)',
          borderColor: 'rgba(255,255,255,0.14)',
        },
      }}
    >
      {label}
    </Button>
  );
}

function LogoMark() {
  return (
    <Box
      sx={{
        width: { xs: 60, md: 70 },
        height: { xs: 60, md: 70 },
        borderRadius: '50%',
        position: 'relative',
        display: 'grid',
        placeItems: 'center',
        background: 'radial-gradient(circle at 30% 30%, #67E8F9 0%, #2563EB 44%, #4338CA 100%)',
        border: '1px solid rgba(255,255,255,0.16)',
        boxShadow: '0 18px 34px rgba(2, 6, 23, 0.24), inset 0 1px 0 rgba(255,255,255,0.18)',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 7,
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.12)',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.01))',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: { xs: 34, md: 40 },
          height: { xs: 28, md: 32 },
          bottom: { xs: 13, md: 15 },
          borderRadius: '8px 8px 12px 12px',
          background: 'linear-gradient(180deg, #F8FAFC 0%, #E0E7FF 100%)',
          boxShadow: '0 12px 22px rgba(15, 23, 42, 0.22)',
          border: '1px solid rgba(255,255,255,0.72)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: { xs: 18, md: 22 },
          height: { xs: 11, md: 13 },
          top: { xs: 16, md: 18 },
          left: '50%',
          transform: 'translateX(-50%)',
          border: '3px solid rgba(255,255,255,0.98)',
          borderBottom: 'none',
          borderRadius: '16px 16px 0 0',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: { xs: 20, md: 24 },
          height: { xs: 3, md: 4 },
          top: { xs: 28, md: 31 },
          left: '50%',
          transform: 'translateX(-50%)',
          borderRadius: 999,
          background: 'linear-gradient(90deg, rgba(191,219,254,0.2), rgba(255,255,255,0.95), rgba(191,219,254,0.2))',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: 0,
          height: 0,
          left: '50%',
          top: '50%',
          transform: 'translate(-33%, 2%)',
          borderTop: '9px solid transparent',
          borderBottom: '9px solid transparent',
          borderLeft: '15px solid #2563EB',
          filter: 'drop-shadow(0 3px 6px rgba(37, 99, 235, 0.25))',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: { xs: 8, md: 9 },
          height: { xs: 8, md: 9 },
          right: { xs: 14, md: 16 },
          top: { xs: 13, md: 15 },
          borderRadius: '50%',
          background: 'linear-gradient(180deg, #FDE68A, #F59E0B)',
          boxShadow: '0 0 16px rgba(245, 158, 11, 0.45)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: { xs: 6, md: 7 },
          height: { xs: 6, md: 7 },
          left: { xs: 15, md: 17 },
          bottom: { xs: 17, md: 20 },
          borderRadius: '50%',
          background: 'rgba(103, 232, 249, 0.45)',
        }}
      />
    </Box>
  );
}

function AppShell({ children }) {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const initials = user?.name
    ? user.name
        .split(' ')
        .map((part) => part[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()
    : 'PS';

  return (
    <Box>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: 'rgba(15, 23, 42, 0.94)',
          backdropFilter: 'blur(18px)',
          borderBottom: '1px solid rgba(148, 163, 184, 0.16)',
        }}
      >
        <Toolbar sx={{ py: { xs: 1.5, md: 2.25 } }}>
          <Container
            maxWidth="xl"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'stretch',
              justifyContent: 'center',
              gap: 1.75,
            }}
          >
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={{ xs: 2, md: 3 }}
              alignItems={{ xs: 'center', md: 'center' }}
              justifyContent="space-between"
              sx={{ width: '100%' }}
            >
              <Stack direction="row" spacing={1.75} alignItems="center" sx={{ flexShrink: 0 }}>
                <LogoMark />
                <Typography
                  variant="h3"
                  component={RouterLink}
                  to="/"
                  sx={{
                    color: '#F8FAFC',
                    fontWeight: 800,
                    textDecoration: 'none',
                    lineHeight: 1,
                    whiteSpace: 'nowrap',
                  }}
                >
                  Play Store
                </Typography>
              </Stack>

              {isAuthenticated ? (
                <Stack direction="row" spacing={1} alignItems="center" sx={{ flexWrap: 'wrap', justifyContent: 'center' }}>
                  {user?.role === 'owner' ? (
                    <Button
                      component={RouterLink}
                      to="/owner/apps/new"
                      startIcon={<AddCircleOutlineOutlinedIcon />}
                      color="secondary"
                      variant="contained"
                      sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
                    >
                      Add App
                    </Button>
                  ) : null}
                  <Tooltip title="Profile">
                    <IconButton color="inherit" component={RouterLink} to="/profile" sx={{ color: '#E2E8F0' }}>
                      <AccountCircleOutlinedIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Notifications">
                    <IconButton color="inherit" component={RouterLink} to="/notifications" sx={{ color: '#E2E8F0' }}>
                      <Badge variant="dot" color="secondary">
                        <NotificationsOutlinedIcon />
                      </Badge>
                    </IconButton>
                  </Tooltip>
                  {user?.role === 'owner' ? (
                    <Tooltip title="Owner Dashboard">
                      <IconButton color="inherit" component={RouterLink} to="/owner" sx={{ color: '#E2E8F0' }}>
                        <DashboardOutlinedIcon />
                      </IconButton>
                    </Tooltip>
                  ) : null}
                  <Avatar
                    component={RouterLink}
                    to="/profile"
                    sx={{
                      bgcolor: '#2563EB',
                      width: 42,
                      height: 42,
                      textDecoration: 'none',
                      fontWeight: 800,
                      boxShadow: '0 10px 22px rgba(37, 99, 235, 0.22)',
                    }}
                  >
                    {initials}
                  </Avatar>
                  <Button
                    color="inherit"
                    variant="outlined"
                    sx={{ borderColor: 'rgba(255,255,255,0.16)', color: '#F8FAFC' }}
                    onClick={async () => {
                      await logout();
                      navigate('/');
                    }}
                  >
                    Logout
                  </Button>
                </Stack>
              ) : (
                <Stack direction="row" spacing={1} alignItems="center" sx={{ flexWrap: 'wrap', justifyContent: 'center' }}>
                  <Button
                    color="inherit"
                    component={RouterLink}
                    to="/login"
                    variant="outlined"
                    sx={{ borderColor: 'rgba(255,255,255,0.16)', color: '#F8FAFC' }}
                  >
                    Login
                  </Button>
                  <Button variant="contained" color="secondary" component={RouterLink} to="/register">
                    Register
                  </Button>
                </Stack>
              )}
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{
                width: '100%',
                justifyContent: { xs: 'center', md: 'flex-start' },
                flexWrap: 'wrap',
              }}
            >
              <NavButton to="/" label="Home" />
              <NavButton to="/apps" label="Applications" />
              {isAuthenticated ? <NavButton to="/profile" label="Profile" /> : null}
              {user?.role === 'owner' ? <NavButton to="/owner" label="Dashboard" /> : null}
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>

      <Container maxWidth="xl" sx={{ py: { xs: 3, md: 4.5 } }}>
        {children}
      </Container>

      <Box
        component="footer"
        sx={{
          py: 3,
          mt: 6,
          borderTop: '1px solid rgba(148, 163, 184, 0.16)',
          bgcolor: 'rgba(255,255,255,0.82)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'center' },
            gap: 1.5,
          }}
        >
          <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 700 }}>
            Belongs to GALETI MOHAMMAD HUSSAIN
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A professional Play Store platform for application discovery, reviews, downloads, and owner management.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default AppShell;
