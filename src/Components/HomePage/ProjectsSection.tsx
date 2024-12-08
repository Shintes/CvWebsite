import {
  Box,
  Typography,
  useTheme,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { motion } from "framer-motion";
import { Section, SectionTitle } from "./StyledComponents";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { useState } from "react";

interface Project {
  title: string;
  image: string;
  description: string;
  url: string;
}

interface ProjectsSectionProps {
  projects: Project[];
  onCardClick: (url: string) => void;
}

function ProjectsSection({ projects, onCardClick }: ProjectsSectionProps) {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const getAdjacentIndex = (offset: number) => {
    const newIndex = currentIndex + offset;
    if (newIndex < 0) return projects.length - 1;
    if (newIndex >= projects.length) return 0;
    return newIndex;
  };

  if (!projects || projects.length === 0) {
    return (
      <Section>
        <SectionTitle>Projects</SectionTitle>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "200px",
          }}
        >
          <CircularProgress />
        </Box>
      </Section>
    );
  }

  return (
    <Section>
      <SectionTitle>Projects</SectionTitle>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: "240px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: -80,
            width: "60px",
            height: "240px",
            opacity: 0.4,
            filter: "blur(4px)",
            backgroundImage: `url(${projects[getAdjacentIndex(-1)].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "8px",
          }}
        />

        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{ width: "100%" }}
        >
          <Box
            onClick={() => onCardClick(projects[currentIndex].url)}
            sx={{
              cursor: "pointer",
              backgroundColor: theme.palette.background.paper,
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              "&:hover img": {
                transform: "scale(1.02)",
              },
            }}
          >
            <img
              src={projects[currentIndex].image}
              alt={projects[currentIndex].title}
              style={{
                width: "100%",
                height: "240px",
                objectFit: "cover",
                transition: "transform 0.3s ease",
              }}
            />
            <Box sx={{ p: 2 }}>
              <Typography
                variant="h6"
                sx={{
                  mt: 1,
                  mb: 1,
                  fontSize: "1.1rem",
                }}
              >
                {projects[currentIndex].title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: theme.palette.text.secondary }}
              >
                {projects[currentIndex].description}
              </Typography>
            </Box>
          </Box>
        </motion.div>

        <Box
          sx={{
            position: "absolute",
            right: -80,
            width: "60px",
            height: "240px",
            opacity: 0.4,
            filter: "blur(4px)",
            backgroundImage: `url(${projects[getAdjacentIndex(1)].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "8px",
          }}
        />

        <IconButton
          onClick={handlePrevious}
          sx={{
            position: "absolute",
            left: -45,
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: theme.palette.background.paper,
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            "&:hover": {
              backgroundColor: theme.palette.action.hover,
            },
          }}
        >
          <NavigateBefore />
        </IconButton>

        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            right: -45,
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: theme.palette.background.paper,
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            "&:hover": {
              backgroundColor: theme.palette.action.hover,
            },
          }}
        >
          <NavigateNext />
        </IconButton>
      </Box>
    </Section>
  );
}

export default ProjectsSection;
