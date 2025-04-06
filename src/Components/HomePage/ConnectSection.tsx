import { Box, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
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
    <Section>
      <SectionTitle>Connect</SectionTitle>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
          <LinkBox href={`mailto:${email}`}>
            <EmailIcon /> {email}
          </LinkBox>
          <LinkBox href={linkedin} target="_blank">
            <LinkedInIcon />
          </LinkBox>
          <LinkBox href={github} target="_blank">
            <GitHubIcon />
          </LinkBox>
        </Box>

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Box
            component="button"
            onClick={() => navigate("/contact")}
            sx={{
              padding: theme.spacing(1.5, 4),
              fontSize: "1rem",
              borderRadius: "4px",
              background: "transparent",
              color: theme.palette.text.primary,
              border: `none`,
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            Contact Me
          </Box>
        </motion.div>

        <Box>
          <Typography variant="body2" sx={{ color: "inherit" }}>
            📍 {location}
          </Typography>
        </Box>
      </Box>
    </Section>
  );
}

export default ConnectSection;
