import {
  AppBar,
  Toolbar,
  Button,
  Drawer,
  IconButton,
  Container,
  MenuItem,
  SelectChangeEvent,
  Box,
  Select,
} from "@mui/material";
import { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "../Components/HomePage/Homepage";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import { Brightness7, Brightness4 } from "@mui/icons-material";

interface MenuProps {
  toggleDarkMode: () => void;
}

const LeftSideControls = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
});

const StyledSelect = styled(Select)(({ theme }) => ({
  backgroundColor: "transparent",
  backdropFilter: "blur(8px)",
  borderRadius: "12px",
  minWidth: "120px",
  transition: "all 0.3s ease-in-out",
  border: `1px solid ${
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
  }`,
  "& .MuiSelect-select": {
    padding: "8px 16px",
  },
  "&:hover": {
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.05)"
        : "rgba(0,0,0,0.05)",
  },
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    backgroundColor: theme.palette.background.default,
    width: 200,
    padding: "2rem 1rem",
    "& button": {
      margin: "0.5rem 0",
      borderRadius: "8px",
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor:
          theme.palette.mode === "dark"
            ? "rgba(255,255,255,0.05)"
            : "rgba(0,0,0,0.05)",
        transform: "translateX(8px)",
      },
    },
  },
}));

function Menu({ toggleDarkMode }: MenuProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");
  const handleLanguageChange = (event: SelectChangeEvent<unknown>) => {
    setSelectedLanguage(event.target.value as string);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Router>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: "background.default",
          borderBottom: (theme) =>
            `1px solid ${
              theme.palette.mode === "dark"
                ? "rgba(255,255,255,0.1)"
                : "rgba(0,0,0,0.1)"
            }`,
          backdropFilter: "blur(10px)",
        }}
      >
        <Toolbar
          sx={{ display: "flex", justifyContent: "space-between", py: 1 }}
        >
          <IconButton
            edge="start"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{
              transition: "transform 0.3s ease",
              "&:hover": { transform: "scale(1.1)" },
            }}
          >
            <MenuIcon />
          </IconButton>
          <LeftSideControls>
            <IconButton
              onClick={toggleDarkMode}
              sx={{
                transition: "transform 0.3s ease",
                "&:hover": { transform: "rotate(180deg)" },
              }}
            >
              {useTheme().palette.mode === "dark" ? (
                <Brightness7 color="inherit" />
              ) : (
                <Brightness4 color="inherit" />
              )}
            </IconButton>
            <StyledSelect
              value={selectedLanguage}
              onChange={handleLanguageChange}
              variant="outlined"
              size="small"
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="es">Español</MenuItem>
              <MenuItem value="fr">Français</MenuItem>
            </StyledSelect>
          </LeftSideControls>
        </Toolbar>
      </AppBar>
      <StyledDrawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <div
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{ textAlign: "left", width: "100%" }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/about"
            sx={{ textAlign: "left", width: "100%" }}
          >
            About
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/contact"
            sx={{ textAlign: "left", width: "100%" }}
          >
            Contact
          </Button>
        </div>
      </StyledDrawer>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default Menu;
