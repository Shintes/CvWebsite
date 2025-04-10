import Menu from "./Menu/Menu";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useEffect } from "react";
import { lightTheme, darkTheme } from "./theme";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, setTheme } from "./store/themeSlice";
import { RootState } from "./store/store";

function ThemeWrapper() {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      dispatch(setTheme(e.matches));
    };

    mediaQuery.addEventListener("change", handleChange);
    document.documentElement.style.colorScheme = darkMode ? "dark" : "light";

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [darkMode, dispatch]);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <AnimatePresence mode="wait">
        <Menu toggleDarkMode={() => dispatch(toggleTheme())} />
      </AnimatePresence>
    </ThemeProvider>
  );
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeWrapper />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
