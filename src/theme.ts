import { createTheme, ThemeOptions } from "@mui/material/styles";

const commonTheme: ThemeOptions = {
  typography: {
    fontFamily:
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontSize: "clamp(2.5rem, 5vw, 4rem)",
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: "-0.03em",
    },
    h2: {
      fontSize: "clamp(2rem, 4vw, 2.5rem)",
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
    },
    h3: {
      fontSize: "clamp(1.5rem, 3vw, 2rem)",
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: "-0.02em",
    },
    body1: {
      fontSize: "clamp(1rem, 2vw, 1.125rem)",
      lineHeight: 1.7,
      letterSpacing: "-0.01em",
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 500,
          padding: "12px 24px",
          borderRadius: "8px",
          fontSize: "1rem",
          letterSpacing: "-0.01em",
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            transform: "translateY(-2px)",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "inherit",
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            transform: "scale(1.1)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          boxShadow: "none",
          backdropFilter: "blur(10px)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
            "& fieldset": {
              borderColor: "currentColor",
              transition: "border-color 0.2s ease-in-out",
            },
            "&:hover fieldset": {
              borderColor: "currentColor",
              borderWidth: "2px",
            },
            "&.Mui-focused fieldset": {
              borderColor: "currentColor",
              borderWidth: "2px",
            },
          },
          "& .MuiInputLabel-root": {
            color: "currentColor",
            transition: "all 0.2s ease-in-out",
          },
          "& .MuiInputBase-input": {
            color: "currentColor",
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            width: "100%",
            height: "2px",
            bottom: "-2px",
            left: 0,
            backgroundColor: "currentColor",
            transform: "scaleX(0)",
            transformOrigin: "right",
            transition: "transform 0.3s ease-in-out",
          },
          "&:hover::after": {
            transform: "scaleX(1)",
            transformOrigin: "left",
          },
        },
      },
    },
  },
};

export const lightTheme = createTheme({
  ...commonTheme,
  palette: {
    mode: "light",
    primary: {
      main: "#2563eb",
      light: "#3b82f6",
      dark: "#1d4ed8",
    },
    secondary: {
      main: "#7c3aed",
      light: "#8b5cf6",
      dark: "#6d28d9",
    },
    background: {
      default: "#ffffff",
      paper: "#f8fafc",
    },
    text: {
      primary: "#1e293b",
      secondary: "#64748b",
    },
    divider: "rgba(0, 0, 0, 0.1)",
  },
});

export const darkTheme = createTheme({
  ...commonTheme,
  palette: {
    mode: "dark",
    primary: {
      main: "#3b82f6",
      light: "#60a5fa",
      dark: "#2563eb",
    },
    secondary: {
      main: "#8b5cf6",
      light: "#a78bfa",
      dark: "#7c3aed",
    },
    background: {
      default: "#0f172a",
      paper: "#1e293b",
    },
    text: {
      primary: "#f8fafc",
      secondary: "rgba(255, 255, 255, 0.7)",
    },
    divider: "rgba(255, 255, 255, 0.1)",
  },
});
