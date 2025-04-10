import { Box, Toolbar, useTheme } from "@mui/material";
import {
  Brightness7,
  Brightness4,
  Menu as MenuIcon,
} from "@mui/icons-material";
import {
  StyledAppBar,
  MenuButton,
  ThemeToggleButton,
} from "./StyledComponents";
import NavLinks from "./NavLinks";

interface MenuAppBarProps {
  isMobile: boolean;
  onMenuClick: () => void;
  onThemeToggle: () => void;
}

const MenuAppBar = ({
  isMobile,
  onMenuClick,
  onThemeToggle,
}: MenuAppBarProps) => {
  const theme = useTheme();

  return (
    <StyledAppBar position="sticky" elevation={0}>
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {isMobile ? (
              <MenuButton edge="start" aria-label="menu" onClick={onMenuClick}>
                <MenuIcon />
              </MenuButton>
            ) : (
              <NavLinks />
            )}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <ThemeToggleButton onClick={onThemeToggle}>
              {theme.palette.mode === "dark" ? (
                <Brightness7 />
              ) : (
                <Brightness4 />
              )}
            </ThemeToggleButton>
          </Box>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default MenuAppBar;
