import { Container } from "@mui/material";
import { useState, useEffect } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Components/HomePage/Homepage";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import Projects from "../Components/Projects/Projects";
import Blog from "../Components/Blog/Blog";
import MenuAppBar from "./MenuAppBar";
import MenuDrawer from "./MenuDrawer";

interface MenuProps {
  toggleDarkMode: () => void;
}

function Menu({ toggleDarkMode }: MenuProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  useEffect(() => {
    if (!isMobile) {
      setDrawerOpen(false);
    }
  }, [isMobile]);

  return (
    <>
      <Router>
        <MenuAppBar
          isMobile={isMobile}
          onMenuClick={toggleDrawer}
          onThemeToggle={toggleDarkMode}
        />
        <MenuDrawer open={drawerOpen} onClose={toggleDrawer} />
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default Menu;
