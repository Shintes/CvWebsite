import { Box, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";
import { LinkBox, Section, SectionTitle } from "./StyledComponents";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";

interface ConnectSectionProps {
  email: string;
  linkedin: string;
  github: string;
  location: string;
}

function ConnectSection({
  email,
  linkedin,
  github,
  location,
}: ConnectSectionProps) {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Section
      sx={{
        minHeight: "10vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <SectionTitle>Connect</SectionTitle>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "center", md: "center" },
          gap: { xs: "2rem", md: "0" },
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <LinkBox href={`mailto:${email}`}>
              <EmailIcon /> {email}
            </LinkBox>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <LinkBox href={linkedin} target="_blank">
              <LinkedInIcon /> LinkedIn
            </LinkBox>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <LinkBox href={github} target="_blank">
              <GitHubIcon /> GitHub
            </LinkBox>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <LinkBox
              onClick={() => navigate("/contact")}
              sx={{
                padding: theme.spacing(1, 2),
                fontSize: "1.2rem",
                borderRadius: "4px",
                background: "transparent",
                color: theme.palette.text.primary,
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}
            >
              <SendIcon fontSize="small" />
              Let's Work Together
            </LinkBox>
          </motion.div>
        </Box>

        <Box>
          <Typography
            variant="body2"
            sx={{ color: "inherit", fontSize: "1.2rem" }}
          >
            📍 {location}
          </Typography>
        </Box>
      </Box>
    </Section>
  );
}

export default ConnectSection;
