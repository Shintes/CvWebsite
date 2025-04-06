import { styled, alpha } from "@mui/material/styles";
import {
  Container,
  Typography,
  Box,
  Link,
  Tab,
  Tabs,
  Button,
  IconButton,
} from "@mui/material";
import { Theme } from "@mui/material/styles";

export const MinimalContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(3, 2),
  maxWidth: "1200px",
  transition: "all 0.3s ease",
  color: theme.palette.text.primary,
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(4, 3),
  },
}));

export const Section = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  marginBottom: "5rem",
  position: "relative",
  transition: "all 0.3s ease",
  "&:last-child": {
    marginBottom: "2rem",
  },
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2.2rem",
  fontWeight: 600,
  marginBottom: "2.5rem",
  color: theme.palette.text.primary,
  letterSpacing: "-0.03em",
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-8px",
    left: 0,
    width: "60px",
    height: "4px",
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${alpha(
      theme.palette.primary.main,
      0.3
    )})`,
    borderRadius: "2px",
  },
}));

export const LinkBox = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  transition: "all 0.3s ease",
  cursor: "pointer",
  padding: "8px 12px",
  borderRadius: "8px",
  "&:hover": {
    color: theme.palette.primary.main,
    backgroundColor: alpha(theme.palette.primary.main, 0.08),
    transform: "translateY(-2px)",
  },
}));

export const SubtleTab = styled(Tab)(({ theme }) => ({
  minWidth: "auto",
  padding: "10px 20px",
  marginRight: "8px",
  borderRadius: "12px",
  color: theme.palette.text.secondary,
  fontSize: "1rem",
  fontWeight: 500,
  letterSpacing: "0.01em",
  textTransform: "none",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: `linear-gradient(45deg, ${alpha(
      theme.palette.primary.main,
      0.1
    )}, ${alpha(theme.palette.primary.main, 0.05)})`,
    opacity: 0,
    transition: "opacity 0.3s ease",
  },
  "&.Mui-selected": {
    color: theme.palette.primary.main,
    backgroundColor: alpha(theme.palette.primary.main, 0.08),
    boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.1)}`,
    transform: "translateY(-2px)",
    "&::before": {
      opacity: 1,
    },
  },
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.04),
    transform: "translateY(-2px)",
    "&::before": {
      opacity: 0.5,
    },
  },
}));

export const TabPanel = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3, 0),
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  opacity: 1,
  transform: "translateY(0)",
  "&.MuiBox-root": {
    animation: "fadeIn 0.3s ease",
  },
  "@keyframes fadeIn": {
    from: {
      opacity: 0,
      transform: "translateY(10px)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
}));

export const OptionalSectionsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
}));

export const OptionalTabs = styled(Tabs)(({ theme }) => ({
  minHeight: "48px",
  marginBottom: theme.spacing(2),
  "& .MuiTabs-indicator": { display: "none" },
  "& .MuiTabs-flexContainer": {
    gap: theme.spacing(1.5),
    flexWrap: "wrap",
  },
}));

export const TabLabelContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));

export const TabCountBadge = styled(Typography)(({ theme }) => ({
  fontSize: "0.75rem",
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.action.hover,
  padding: theme.spacing(0.25, 1),
  borderRadius: "4px",
}));

// Section containers
export const StyledSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: `linear-gradient(135deg, ${theme.palette.primary.main}05 0%, ${theme.palette.secondary.main}05 100%)`,
}));

export const StyledContentContainer = styled(Box)(({ theme }) => ({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: theme.spacing(4),
}));

// Typography styles
export const titleStyles = {
  fontSize: { xs: "2rem", md: "2.5rem" },
  fontWeight: 700,
  marginBottom: 4,
  background: (theme: Theme) =>
    `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

export const subtitleStyles = {
  fontSize: { xs: "1.5rem", md: "2rem" },
  color: "text.secondary",
  marginBottom: 3,
};

// Buttons
export const StyledPrimaryButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 4),
  fontSize: "1.1rem",
  borderRadius: "50px",
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  color:
    theme.palette.mode === "dark" ? theme.palette.background.default : "white",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: `0 10px 20px ${theme.palette.primary.main}40`,
    background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
  },
}));

export const StyledSecondaryButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 4),
  fontSize: "1.1rem",
  borderRadius: "50px",
  background: "transparent",
  border: `1px solid ${theme.palette.text.primary}`,
  color: theme.palette.text.primary,
  "&:hover": {
    background: theme.palette.text.primary,
    color:
      theme.palette.mode === "dark"
        ? theme.palette.text.primary
        : theme.palette.background.default,
  },
}));

// Icons
export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  width: "48px",
  height: "48px",
  background:
    theme.palette.mode === "dark"
      ? `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`
      : `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  color:
    theme.palette.mode === "dark" ? theme.palette.background.default : "white",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: `0 10px 20px ${theme.palette.primary.main}40`,
    background:
      theme.palette.mode === "dark"
        ? `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`
        : `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
  },
}));

// Grid and Layout
export const StyledGridContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(4),
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
}));

export const StyledFlexContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(2),
}));
