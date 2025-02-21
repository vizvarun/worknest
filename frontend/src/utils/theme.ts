import { createTheme } from "@mui/material/styles";
import type { ThemeOptions } from "@mui/material/styles";

const commonThemeSettings: ThemeOptions = {
  typography: {
    fontFamily: "Avenir, system-ui, -apple-system, sans-serif",
    h1: {
      fontFamily: "Avenir",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "Avenir",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "Avenir",
      fontWeight: 700,
    },
    h4: {
      fontFamily: "Avenir",
      fontWeight: 700,
    },
    h5: {
      fontFamily: "Avenir",
      fontWeight: 700,
    },
    h6: {
      fontFamily: "Avenir",
      fontWeight: 700,
    },
    body1: {
      fontFamily: "Avenir",
      fontWeight: 400,
    },
    body2: {
      fontFamily: "Avenir",
      fontWeight: 400,
    },
    button: {
      fontFamily: "Avenir",
      fontWeight: 500,
      textTransform: "none" as const,
    },
  },
};

// Light theme
const lightTheme = createTheme({
  ...commonThemeSettings,
  palette: {
    mode: "light",
    primary: {
      main: "#12afff",
    },
    background: {
      default: "#f9f9f9",
      paper: "#ffffff",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          "&:focus": {
            outline: "none",
            boxShadow: "none",
          },
        },
        contained: {
          backgroundColor: "#12afff",
          color: "#f9f9f9",
          "&:hover": {
            backgroundColor: "#0e8dcc",
          },
        },
      },
    },
  },
});

// Dark theme
const darkTheme = createTheme({
  ...commonThemeSettings,
  palette: {
    mode: "dark",
    primary: {
      main: "#FF7B00",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          "&:focus": {
            outline: "none",
            boxShadow: "none",
          },
        },
        contained: {
          backgroundColor: "#FF7B00",
          "&:hover": {
            backgroundColor: "#cc6200",
          },
        },
      },
    },
  },
});

export { lightTheme, darkTheme };
