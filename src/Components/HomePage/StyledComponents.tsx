import { styled, alpha } from "@mui/material/styles";
import { Container, Typography, Box, Link, Tab } from "@mui/material";

export const MinimalContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(2, 1),
  maxWidth: "1200px",
  transition: "all 0.3s ease-in-out",
  color: theme.palette.text.primary,
}));

export const Section = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  marginBottom: "4rem",
  position: "relative",
  transition: "all 0.3s ease-in-out",
  "&:last-child": {
    marginBottom: "2rem",
  },
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: 300,
  marginBottom: "2rem",
  color: theme.palette.text.primary,
  letterSpacing: "-0.02em",
}));

export const LinkBox = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  transition: "color 0.2s ease",
  cursor: "pointer",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

export const SubtleTab = styled(Tab)(({ theme }) => ({
  minWidth: "auto",
  padding: "8px 20px",
  marginRight: "12px",
  borderRadius: "24px",
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.background.paper,
  fontSize: "0.9rem",
  fontWeight: 300,
  letterSpacing: "0.02em",
  textTransform: "none",
  transition: "all 0.3s ease",
  "&.Mui-selected": {
    color: theme.palette.text.primary,
    backgroundColor: alpha(theme.palette.primary.main, 0.06),
    fontWeight: 400,
  },
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.04),
  },
}));

export const TabPanel = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 0),
  transition: "opacity 0.3s ease",
}));
