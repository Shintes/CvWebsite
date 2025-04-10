import { Box, useTheme, useMediaQuery } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { NavButton } from "./StyledComponents";

const NavLinks = () => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: 2,
      }}
    >
      {links.map((link) => (
        <NavButton
          key={link.path}
          color="inherit"
          component={Link}
          to={link.path}
          className={location.pathname === link.path ? "active" : ""}
          sx={{ textAlign: "left", width: isMobile ? "100%" : "auto" }}
        >
          {link.label}
        </NavButton>
      ))}
    </Box>
  );
};

export default NavLinks;
