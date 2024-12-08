import { Box, Typography, useTheme } from "@mui/material";
import { Section, SectionTitle } from "./StyledComponents";

interface Experience {
  title: string;
  location: string;
  date: string;
  description: string;
}

interface ExperienceSectionProps {
  experience: Experience[];
}

function ExperienceSection({ experience }: ExperienceSectionProps) {
  const theme = useTheme();

  return (
    <Section>
      <SectionTitle>Experience</SectionTitle>
      <Box
        sx={{
          display: "grid",
          gap: "3rem",
        }}
      >
        {experience.map((exp, index) => (
          <Box key={index}>
            <Typography
              variant="h4"
              sx={{
                fontSize: "1.25rem",
                fontWeight: 500,
                mb: 1,
              }}
            >
              {exp.title}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                color: theme.palette.text.secondary,
                mb: 2,
                fontSize: "0.9rem",
              }}
            >
              {exp.location} • {exp.date}
            </Typography>
            <Typography variant="body2">{exp.description}</Typography>
          </Box>
        ))}
      </Box>
    </Section>
  );
}

export default ExperienceSection;
