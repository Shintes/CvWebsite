import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import { Project } from "../../Dto/ProjectDto";

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
}));

const ProjectCard = styled(Card)(() => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  borderRadius: "16px",
  overflow: "hidden",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-8px)",
  },
}));

const ProjectImage = styled(CardMedia)({
  height: 200,
  backgroundSize: "cover",
  backgroundPosition: "center",
});

const ProjectContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

const TechnologyChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  borderRadius: "8px",
  background: `linear-gradient(135deg, ${theme.palette.primary.main}15 0%, ${theme.palette.secondary.main}15 100%)`,
  color: theme.palette.text.primary,
}));

const ProjectsSectionComponent = ({ projects }: ProjectsSectionProps) => {
  const theme = useTheme();

  return (
    <ProjectsSection>
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
          Featured Projects
        </Typography>
        <Grid container spacing={4}>
          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <Grid size={{ xs: 12, md: 6 }} key={project.id}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ProjectCard>
                    <ProjectImage image={project.image} title={project.title} />
                    <ProjectContent>
                      <Typography variant="h5" component="h3">
                        {project.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {project.description}
                      </Typography>
                      <Box sx={{ mt: "auto" }}>
                        {project.technologies.map((tech) => (
                          <TechnologyChip
                            key={tech}
                            label={tech}
                            size="small"
                          />
                        ))}
                      </Box>
                    </ProjectContent>
                  </ProjectCard>
                </motion.div>
              </Grid>
            ))}
        </Grid>
      </motion.div>
    </ProjectsSection>
  );
};

export default ProjectsSectionComponent;
