import Menu from "./Menu/Menu";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState, useEffect } from "react";
import { lightTheme, darkTheme } from "./theme";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      return JSON.parse(savedMode);
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      setDarkMode(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    document.documentElement.style.colorScheme = darkMode ? "dark" : "light";

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [darkMode]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <AnimatePresence mode="wait">
          <Menu toggleDarkMode={() => setDarkMode(!darkMode)} />
        </AnimatePresence>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
