import { Box, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { LinkBox, Section, SectionTitle } from "./StyledComponents";

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
  return (
    <Section>
      <SectionTitle>Connect</SectionTitle>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
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
