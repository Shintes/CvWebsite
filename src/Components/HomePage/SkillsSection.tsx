import { Box, Typography, LinearProgress, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import { Skill } from "../../Dto/SkillDto";

interface SkillsSectionProps {
  skills: Skill[];
}

const SkillsSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: `linear-gradient(135deg, ${theme.palette.primary.main}05 0%, ${theme.palette.secondary.main}05 100%)`,
}));

const SkillGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: theme.spacing(4),
  marginTop: theme.spacing(4),
}));

const SkillCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: "16px",
  background: theme.palette.background.paper,
  boxShadow: `0 4px 6px -1px ${theme.palette.primary.main}10, 0 2px 4px -2px ${theme.palette.primary.main}10`,
}));

const SkillProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 4,
  backgroundColor: theme.palette.background.default,
  "& .MuiLinearProgress-bar": {
    borderRadius: 4,
    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  },
}));

const SkillsSectionComponent = ({ skills }: SkillsSectionProps) => {
  const theme = useTheme();

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <SkillsSection>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontSize: { xs: "2rem", md: "2.5rem" },
            fontWeight: 700,
            marginBottom: 4,
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Skills & Expertise
        </Typography>
        <SkillGrid>
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SkillCard>
                <Typography
                  variant="h6"
                  sx={{
                    marginBottom: 2,
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                  }}
                >
                  {category}
                </Typography>
                {categorySkills.map((skill) => (
                  <Box key={skill.id} sx={{ mb: 2 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 1,
                      }}
                    >
                      <Typography variant="body1">{skill.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {skill.level}%
                      </Typography>
                    </Box>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    >
                      <SkillProgress
                        variant="determinate"
                        value={skill.level}
                      />
                    </motion.div>
                  </Box>
                ))}
              </SkillCard>
            </motion.div>
          ))}
        </SkillGrid>
      </motion.div>
    </SkillsSection>
  );
};

export default SkillsSectionComponent;
