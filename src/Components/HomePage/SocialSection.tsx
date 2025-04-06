import { Box, Typography, Link } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { useNavigate } from "react-router-dom";
import { titleStyles } from "./StyledComponents";

const SocialSection = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      id="social"
      sx={{
        padding: theme.spacing(8, 0),
        background: `linear-gradient(135deg, ${theme.palette.primary.main}05 0%, ${theme.palette.secondary.main}05 100%)`,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Typography sx={titleStyles}>Say Hi</Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 700,
              marginBottom: 4,
            }}
          >
            👋
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: theme.spacing(2),
          }}
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Box
                sx={{
                  width: "48px",
                  height: "48px",
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  color:
                    theme.palette.mode === "dark"
                      ? theme.palette.background.default
                      : "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: `0 10px 20px ${theme.palette.primary.main}40`,
                    background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
                  },
                }}
              >
                <LinkedInIcon />
              </Box>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Box
                sx={{
                  width: "48px",
                  height: "48px",
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  color:
                    theme.palette.mode === "dark"
                      ? theme.palette.background.default
                      : "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: `0 10px 20px ${theme.palette.primary.main}40`,
                    background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
                  },
                }}
              >
                <GitHubIcon />
              </Box>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link href="mailto:your.email@example.com">
              <Box
                sx={{
                  width: "48px",
                  height: "48px",
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  color:
                    theme.palette.mode === "dark"
                      ? theme.palette.background.default
                      : "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: `0 10px 20px ${theme.palette.primary.main}40`,
                    background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
                  },
                }}
              >
                <EmailIcon />
              </Box>
            </Link>
          </motion.div>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Box
              component="button"
              onClick={() => navigate("/contact")}
              sx={{
                padding: theme.spacing(1.5, 4),
                fontSize: "1.1rem",
                borderRadius: "50px",
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                color:
                  theme.palette.mode === "dark"
                    ? theme.palette.background.default
                    : "white",
                border: "none",
                cursor: "pointer",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: `0 10px 20px ${theme.palette.primary.main}40`,
                  background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
                },
              }}
            >
              Contact Me
            </Box>
          </motion.div>
        </Box>
      </motion.div>
    </Box>
  );
};

export default SocialSection;
