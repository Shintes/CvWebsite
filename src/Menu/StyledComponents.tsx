import { AppBar, Button, Drawer, IconButton, styled } from "@mui/material";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: `linear-gradient(135deg, ${
    theme.palette.mode === "dark"
      ? "rgba(18, 18, 18, 0.8)"
      : "rgba(255, 255, 255, 0.8)"
  })`,
  backdropFilter: "blur(10px)",
  borderBottom: `1px solid ${
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
  }`,
  boxShadow: "none",
  transition: "all 0.3s ease",
}));

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    background: `linear-gradient(135deg, ${
      theme.palette.mode === "dark"
        ? "rgba(18, 18, 18, 0.9)"
        : "rgba(255, 255, 255, 0.9)"
    })`,
    backdropFilter: "blur(10px)",
    width: 280,
    padding: "2rem 1.5rem",
    borderRight: `1px solid ${
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.1)"
        : "rgba(0,0,0,0.1)"
    }`,
    "& button": {
      margin: "0.5rem 0",
      borderRadius: "12px",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      position: "relative",
      overflow: "hidden",
      "&::before": {
        content: '""',
        position: "absolute",
        left: 0,
        top: 0,
        width: "4px",
        height: "100%",
        background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        opacity: 0,
        transition: "opacity 0.3s ease",
      },
      "&:hover": {
        transform: "translateX(8px)",
        backgroundColor:
          theme.palette.mode === "dark"
            ? "rgba(255,255,255,0.05)"
            : "rgba(0,0,0,0.05)",
        "&::before": {
          opacity: 1,
        },
      },
      "&.active": {
        backgroundColor:
          theme.palette.mode === "dark"
            ? "rgba(255,255,255,0.1)"
            : "rgba(0,0,0,0.1)",
        "&::before": {
          opacity: 1,
        },
      },
    },
  },
}));

export const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  textTransform: "none",
  fontWeight: 600,
  fontSize: "1rem",
  padding: "12px 20px",
  borderRadius: "12px",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    left: 0,
    top: 0,
    width: "4px",
    height: "100%",
    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    opacity: 0,
    transition: "opacity 0.3s ease",
  },
  "&:hover": {
    transform: "translateY(-2px)",
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.05)"
        : "rgba(0,0,0,0.05)",
    "&::before": {
      opacity: 1,
    },
  },
  "&.active": {
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.1)"
        : "rgba(0,0,0,0.1)",
    "&::before": {
      opacity: 1,
    },
  },
})) as typeof Button;

export const ThemeToggleButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  background: `linear-gradient(135deg, ${
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
  })`,
  borderRadius: "12px",
  padding: "12px",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    transform: "rotate(180deg)",
    background: `linear-gradient(135deg, ${
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.2)"
        : "rgba(0,0,0,0.2)"
    })`,
  },
}));

export const MenuButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  background: `linear-gradient(135deg, ${
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
  })`,
  borderRadius: "12px",
  padding: "12px",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    transform: "scale(1.1)",
    background: `linear-gradient(135deg, ${
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.2)"
        : "rgba(0,0,0,0.2)"
    })`,
  },
}));
