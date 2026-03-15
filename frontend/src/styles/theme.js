import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2563EB',
      dark: '#1D4ED8',
      light: '#E0E7FF',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#7C3AED',
      dark: '#6D28D9',
      light: '#EDE9FE',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#EEF4FB',
      paper: '#FDFEFF',
    },
    text: {
      primary: '#0F172A',
      secondary: '#475569',
    },
    success: {
      main: '#10B981',
    },
    divider: 'rgba(148, 163, 184, 0.18)',
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: 'Manrope, Segoe UI, sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 800,
      lineHeight: 1.05,
    },
    h2: {
      fontSize: '2.35rem',
      fontWeight: 800,
      lineHeight: 1.08,
    },
    h3: {
      fontSize: '1.8rem',
      fontWeight: 800,
      lineHeight: 1.15,
    },
    h4: {
      fontSize: '1.35rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h5: {
      fontSize: '1.08rem',
      fontWeight: 700,
      lineHeight: 1.25,
    },
    body1: {
      lineHeight: 1.65,
    },
    body2: {
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 700,
      letterSpacing: 0.1,
      fontSize: '0.95rem',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 20px 54px rgba(15, 23, 42, 0.09)',
          border: '1px solid rgba(148, 163, 184, 0.14)',
          backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.98), rgba(247,250,255,0.98))',
          backdropFilter: 'blur(10px)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          paddingInline: 18,
          paddingBlock: 11,
          transition: 'transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease',
          '&:hover': {
            transform: 'translateY(-1px)',
          },
        },
        containedPrimary: {
          boxShadow: '0 12px 24px rgba(37, 99, 235, 0.22)',
          backgroundImage: 'linear-gradient(135deg, #2563EB, #3B82F6)',
        },
        containedSecondary: {
          boxShadow: '0 12px 24px rgba(124, 58, 237, 0.22)',
          backgroundImage: 'linear-gradient(135deg, #7C3AED, #8B5CF6)',
        },
        outlinedPrimary: {
          borderColor: 'rgba(37, 99, 235, 0.28)',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 700,
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: 104,
        },
      },
    },
  },
});

export default theme;
