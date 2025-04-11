import { Box, useTheme, useMediaQuery } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { NavButton } from "./StyledComponents";
import { motion } from "framer-motion";

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
        <Box
          key={link.path}
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          <NavButton
            color="inherit"
            component={Link}
            to={link.path}
            className={location.pathname === link.path ? "active" : ""}
            sx={{
              textAlign: "left",
              width: isMobile ? "100%" : "auto",
              position: "relative",
              padding: "8px 16px",
              "&::after": {
                content: '""',
                position: "absolute",
                width: "100%",
                height: "2px",
                bottom: 0,
                left: 0,
                backgroundColor: "currentColor",
                transform: "scaleX(0)",
                transformOrigin: "right",
                transition: "transform 0.3s ease-in-out",
              },
              "&:hover::after": {
                transform: "scaleX(1)",
                transformOrigin: "left",
              },
              "&.active::after": {
                transform: "scaleX(1)",
                transformOrigin: "left",
              },
            }}
          >
            {link.label}
          </NavButton>
          {location.pathname === link.path && (
            <motion.div
              layoutId="activeIndicator"
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: theme.palette.primary.main,
              }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
        </Box>
      ))}
    </Box>
  );
};

export default NavLinks;
