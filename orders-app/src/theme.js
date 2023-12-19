import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    neutral: {
      main: "#79747E",
      contrastText: "#fff",
    },
    dark: {
      main: "#112211",
      contrastText: "#fff",
    },

    Steel: {
      main: '#343B46',
      light: '#606B79',
      dark: '#21272C',
      contrastText: '#F5F5F5',
      },
      
      Concrete: {
      main: '#414D59',
      light: '#6B778E',
      dark: '#292E33',
      contrastText: '#fff',
      },
      
      
      Slate: {
      main: '#374257',
      light: '#64748B',
      dark: '#253039',
      contrastText: '#eaecef',
      },
      
      Ash: {
      main: '#283B50',
      light: '#557696',
      dark: '#1B2E40',
      contrastText: '#e1e5eb',
      },
      
      Charcoal: {
      main: '#2F3842',
      light: '#596376',
      dark: '#191E23',
      contrastText: '#d1d5da',
      },
      
      Graphite: {
      main: '#2C353F',
      light: '#4B5969',
      dark: '#212B34',
      contrastText: '#ced3d9'
      }
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    h1: {
      fontWeight: 700,
      fontSize: "80px",
    },
    h2: {
      fontWeight: 700,
      fontSize: "40px",
      lineHeight: 1,
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: "16px",
      color: "#112211",
    },
    subtitle2: {
      fontWeight: 600,
      fontSize: "14px",
      color: "#112211",
    },
    body1: {
      fontWeight: 400,
      fontSize: "12px",
      color: "#112211",
    },
    body2: {
      fontWeight: 600,
      fontSize: "14px",
      color: "#112211",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 300,
      md: 700,
      bg: 1000,
      lg: 1400,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
