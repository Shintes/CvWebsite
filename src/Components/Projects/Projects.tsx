import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  useTheme,
  Button,
  Fade,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import placeholderImage from "../../assets/placeholder.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const ProjectCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  overflow: "hidden",
  borderRadius: "16px",
  background: theme.palette.background.paper,
  boxShadow: "none",
  border: `1px solid ${theme.palette.divider}`,
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: `0 20px 40px ${
      theme.palette.mode === "dark"
        ? "rgba(0, 0, 0, 0.3)"
        : "rgba(0, 0, 0, 0.1)"
    }`,
    "& .MuiCardMedia-root": {
      transform: "scale(1.05)",
    },
    "& .project-overlay": {
      opacity: 1,
      backdropFilter: "blur(8px)",
    },
    "& .MuiTypography-h5": {
      color: theme.palette.primary.main,
    },
  },
}));

const ProjectOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)`,
  display: "flex",
  alignItems: "flex-end",
  padding: theme.spacing(2),
  opacity: 0,
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
}));

const StyledCardMedia = styled(CardMedia)({
  height: 240,
  transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
});

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: "8px",
  textTransform: "none",
  fontWeight: 500,
  padding: "8px 16px",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: `0 4px 12px ${theme.palette.primary.main}40`,
  },
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  borderRadius: "6px",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: `0 4px 8px ${theme.palette.primary.main}40`,
  },
}));

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with React and Material-UI, featuring dark mode and smooth animations.",
    image: placeholderImage,
    technologies: ["React", "Material-UI", "TypeScript"],
    link: "https://github.com/yourusername/portfolio",
  },
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
    image: placeholderImage,
    technologies: ["Node.js", "React", "MongoDB", "Express"],
    link: "https://github.com/yourusername/ecommerce",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team features.",
    image: placeholderImage,
    technologies: ["React", "Firebase", "Redux"],
    link: "https://github.com/yourusername/task-manager",
  },
];

function Projects() {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      <Fade in timeout={1000}>
        <Box sx={{ mb: { xs: 4, md: 8 }, textAlign: "center" }}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
            }}
          >
            My Projects
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              maxWidth: "600px",
              mx: "auto",
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
          >
            Here are some of the projects I've worked on. Each project
            represents a unique challenge and learning opportunity.
          </Typography>
        </Box>
      </Fade>

      <Grid container spacing={4} sx={{ justifyContent: "center" }}>
        {projects.map((project, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }} component="div">
            <ProjectCard>
              <StyledCardMedia
                image={project.image}
                sx={{ objectFit: "cover" }}
              />
              <ProjectOverlay className="project-overlay">
                <Box sx={{ width: "100%", display: "flex", gap: 2 }}>
                  <StyledButton
                    variant="outlined"
                    color="primary"
                    startIcon={<GitHubIcon />}
                    LinkComponent="a"
                    href={project.link}
                    sx={{
                      flex: 1,
                      borderColor: theme.palette.primary.main,
                      color: theme.palette.primary.main,
                      "&:hover": {
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                      },
                    }}
                  >
                    Code
                  </StyledButton>
                  <StyledButton
                    variant="outlined"
                    color="inherit"
                    startIcon={<OpenInNewIcon />}
                    LinkComponent="a"
                    href={project.link}
                    sx={{
                      flex: 1,
                      borderColor: theme.palette.primary.main,
                      color: theme.palette.primary.main,
                      "&:hover": {
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                      },
                    }}
                  >
                    Demo
                  </StyledButton>
                </Box>
              </ProjectOverlay>
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  sx={{
                    fontWeight: 600,
                    transition: "color 0.3s ease-in-out",
                    mb: 2,
                  }}
                >
                  {project.title}
                </Typography>
                <Typography
                  color="text.secondary"
                  sx={{
                    mb: 3,
                    fontSize: { xs: "0.875rem", md: "1rem" },
                  }}
                >
                  {project.description}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {project.technologies.map((tech, techIndex) => (
                    <StyledChip
                      key={techIndex}
                      label={tech}
                      size="small"
                      sx={{
                        backgroundColor:
                          theme.palette.mode === "dark"
                            ? "rgba(255, 255, 255, 0.1)"
                            : "rgba(0, 0, 0, 0.05)",
                        "&:hover": {
                          backgroundColor: theme.palette.primary.main,
                          color: theme.palette.primary.contrastText,
                        },
                      }}
                    />
                  ))}
                </Box>
              </CardContent>
            </ProjectCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Projects;
