import { Box, Typography, useTheme, Tooltip } from "@mui/material";
import { Section, SectionTitle } from "./StyledComponents";

interface Skill {
  name: string;
  level: number;
}

interface SkillsSectionProps {
  skills: Skill[];
}

function SkillsSection({ skills }: SkillsSectionProps) {
  const theme = useTheme();

  return (
    <Section>
      <SectionTitle>Skills</SectionTitle>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: "2rem",
        }}
      >
        {skills.map((skill, index) => (
          <Tooltip
            key={index}
            title={`${skill.level}% proficiency`}
            placement="top"
          >
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "0.5rem",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "1rem",
                    color: "inherit",
                  }}
                >
                  {skill.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.text.secondary,
                    fontSize: "0.875rem",
                  }}
                >
                  {skill.level}%
                </Typography>
              </Box>
              <Box
                sx={{
                  height: "8px",
                  width: "100%",
                  backgroundColor: theme.palette.action.hover,
                  borderRadius: "4px",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    height: "100%",
                    width: `${skill.level}%`,
                    backgroundColor: theme.palette.primary.main,
                    transition: "width 0.5s ease",
                  }}
                />
              </Box>
            </Box>
          </Tooltip>
        ))}
      </Box>
    </Section>
  );
}

export default SkillsSection;
