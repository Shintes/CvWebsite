import { Container, Box, useScrollTrigger } from "@mui/material";
import { useState, useEffect } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
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

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3, ease: "easeInOut" },
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function Menu({ toggleDarkMode }: MenuProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  useEffect(() => {
    if (!isMobile) {
      setDrawerOpen(false);
    }
  }, [isMobile]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Router>
        <MenuAppBar
          isMobile={isMobile}
          onMenuClick={toggleDrawer}
          onThemeToggle={toggleDarkMode}
          scrolled={trigger}
        />
        <MenuDrawer open={drawerOpen} onClose={toggleDrawer} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: { xs: 2, md: 4 },
            px: { xs: 2, md: 4 },
          }}
        >
          <Container maxWidth="lg">
            <AnimatedRoutes />
          </Container>
        </Box>
      </Router>
    </Box>
  );
}

export default Menu;
