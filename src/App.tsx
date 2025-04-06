import Menu from "./Menu/Menu";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState, useEffect } from "react";
import { lightTheme, darkTheme } from "./theme";
import { AnimatePresence } from "framer-motion";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    document.documentElement.style.colorScheme = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <AnimatePresence mode="wait">
        <Menu toggleDarkMode={() => setDarkMode(!darkMode)} />
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
