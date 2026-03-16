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
        width: { xs: 58, md: 66 },
        height: { xs: 58, md: 66 },
        borderRadius: '50%',
        position: 'relative',
        display: 'grid',
        placeItems: 'center',
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
        border: '1px solid rgba(226, 232, 240, 0.9)',
        boxShadow: '0 16px 34px rgba(2, 6, 23, 0.2), inset 0 1px 0 rgba(255,255,255,0.95)',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 5,
          borderRadius: '50%',
          border: '1px solid rgba(226, 232, 240, 0.9)',
          background: 'radial-gradient(circle at 30% 25%, rgba(255,255,255,0.98) 0%, rgba(241,245,249,0.94) 100%)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: { xs: 30, md: 34 },
          height: { xs: 23, md: 26 },
          bottom: { xs: 15, md: 17 },
          borderRadius: '9px 9px 11px 11px',
          background: 'linear-gradient(180deg, #EF4444 0%, #DC2626 100%)',
          border: '1px solid rgba(185, 28, 28, 0.42)',
          boxShadow: '0 14px 24px rgba(185, 28, 28, 0.28)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: { xs: 15, md: 17 },
          height: { xs: 10, md: 11 },
          top: { xs: 12, md: 14 },
          left: '50%',
          transform: 'translateX(-50%)',
          border: '3px solid #DC2626',
          borderBottom: 'none',
          borderRadius: '16px 16px 0 0',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: { xs: 14, md: 16 },
          height: { xs: 10, md: 12 },
          top: { xs: 23, md: 25 },
          left: '50%',
          transform: 'translateX(-50%)',
          borderRadius: '0 0 8px 8px',
          background: 'rgba(255,255,255,0.96)',
          clipPath: 'polygon(0 0, 100% 0, 86% 100%, 14% 100%)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: { xs: 8, md: 9 },
          height: { xs: 8, md: 9 },
          right: { xs: 13, md: 15 },
          top: { xs: 14, md: 15 },
          borderRadius: '50%',
          background: 'rgba(254, 242, 242, 0.86)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: { xs: 22, md: 24 },
          height: { xs: 1.5, md: 2 },
          left: '50%',
          bottom: { xs: 18, md: 20 },
          transform: 'translateX(-50%)',
          borderRadius: 999,
          background: 'rgba(255,255,255,0.38)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: { xs: 8, md: 9 },
          height: { xs: 8, md: 9 },
          left: { xs: 14, md: 15 },
          bottom: { xs: 14, md: 16 },
          borderRadius: '50%',
          background: 'rgba(254, 242, 242, 0.4)',
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
              {user?.role === 'owner' ? <NavButton to="/owner/users" label="User Management" /> : null}
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
        <Container maxWidth="xl">
          <Typography
            align="center"
            variant="body2"
            color="text.secondary"
            sx={{ fontWeight: 600, fontSize: { xs: '0.95rem', md: '1rem' } }}
          >
            For queries or project support, reach out to{' '}
            <Box component="span" sx={{ color: '#DC2626', fontWeight: 800 }}>
              hussaingaleti786@gmail.com
            </Box>
            .
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default AppShell;
