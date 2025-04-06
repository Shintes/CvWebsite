import {
  AppBar,
  Toolbar,
  Button,
  Drawer,
  IconButton,
  Container,
  Box,
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

const LeftSideControls = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
  "& .MuiIconButton-root": {
    color: theme.palette.text.primary,
    "&:hover": {
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,0.05)"
          : "rgba(0,0,0,0.05)",
    },
  },
}));


const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    backgroundColor: theme.palette.background.default,
    width: 250,
    padding: "2rem 1rem",
    "& button": {
      margin: "0.5rem 0",
      borderRadius: theme.shape.borderRadius,
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

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.mode === "dark" 
    ? `linear-gradient(45deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`
    : `linear-gradient(45deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
  backdropFilter: "blur(10px)",
  borderBottom: `1px solid ${
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
  }`,
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  textTransform: "none",
  fontWeight: 600,
  fontSize: "1rem",
  padding: "8px 16px",
  borderRadius: theme.shape.borderRadius,
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.05)"
        : "rgba(0,0,0,0.05)",
    transform: "translateY(-2px)",
  },
})) as typeof Button;

function Menu({ toggleDarkMode }: MenuProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Router>
      <StyledAppBar position="sticky" elevation={0}> 
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", py: 1 , backgroundColor: "inherit" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton
              edge="start"
              aria-label="menu"
              onClick={toggleDrawer}
              sx={{
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.1)" },
                color: theme.palette.text.primary,
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
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
          </LeftSideControls>
        </Toolbar>
      </StyledAppBar>
      <StyledDrawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <div role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
          <NavButton
            color="inherit"
            component={Link}
            to="/"
            sx={{ textAlign: "left", width: "100%" }}
          >
            Home
          </NavButton>
          <NavButton
            color="inherit"
            component={Link}
            to="/about"
            sx={{ textAlign: "left", width: "100%" }}
          >
            About
          </NavButton>
          <NavButton
            color="inherit"
            component={Link}
            to="/projects"
            sx={{ textAlign: "left", width: "100%" }}
          >
            Projects
          </NavButton>
          <NavButton
            color="inherit"
            component={Link}
            to="/blog"
            sx={{ textAlign: "left", width: "100%" }}
          >
            Blog
          </NavButton>
          <NavButton
            color="inherit"
            component={Link}
            to="/contact"
            sx={{ textAlign: "left", width: "100%" }}
          >
            Contact
          </NavButton>
        </div>
      </StyledDrawer>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<div>Projects Page</div>} />
          <Route path="/blog" element={<div>Blog Page</div>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default Menu;
