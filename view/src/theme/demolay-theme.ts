import { createTheme } from '@mui/material/styles';

// DeMolay color palette from landing page
const demolayColors = {
  navy: '#1B365D',
  gold: '#D4AF37', 
  cream: '#F5F5DC',
  burgundy: '#800020',
  emerald: '#50C878',
};

export const demolayTheme = createTheme({
  palette: {
    primary: {
      main: demolayColors.navy,
      light: '#2C4A70',
      dark: '#0F2440',
      contrastText: '#ffffff',
    },
    secondary: {
      main: demolayColors.gold,
      light: '#E0C04A',
      dark: '#B8962F',
      contrastText: demolayColors.navy,
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#666666',
    },
    success: {
      main: demolayColors.emerald,
    },
    error: {
      main: demolayColors.burgundy,
    },
  },
  typography: {
    fontFamily: '"Source Serif Pro", "Georgia", serif',
    h1: {
      fontFamily: '"Playfair Display", "Times New Roman", serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Playfair Display", "Times New Roman", serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Playfair Display", "Times New Roman", serif',
      fontWeight: 700,
    },
    h4: {
      fontFamily: '"Cinzel", serif',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Cinzel", serif',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Cinzel", serif',
      letterSpacing: '1px',
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: '12px 24px',
          fontSize: '1rem',
          fontWeight: 600,
          '&:hover': {
            transform: 'translateY(-1px)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          },
          transition: 'all 0.2s ease-in-out',
        },
        contained: {
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
        elevation1: {
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: demolayColors.gold,
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: demolayColors.navy,
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          '&:hover': {
            transform: 'scale(1.05)',
          },
          transition: 'all 0.2s ease-in-out',
        },
        colorPrimary: {
          backgroundColor: demolayColors.navy,
          color: 'white',
          '&:hover': {
            backgroundColor: '#2C4A70',
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: demolayColors.gold,
          '&.Mui-checked': {
            color: demolayColors.navy,
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: demolayColors.gold,
          opacity: 0.3,
        },
      },
    },
  },
});
