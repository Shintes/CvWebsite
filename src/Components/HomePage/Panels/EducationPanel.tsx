import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { Education } from "../../Dto/Education";

interface EducationPanelProps {
  education: Education[];
}

function EducationPanel({ education }: EducationPanelProps) {
  const theme = useTheme();

  return (
    <Box sx={{ display: "grid", gap: "3rem" }}>
      {education.map((edu, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "1.25rem", md: "1.5rem" },
              fontWeight: 300,
              mb: 1,
              letterSpacing: "-0.02em",
            }}
          >
            {edu.degree}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              color: theme.palette.text.secondary,
              mb: 2,
              letterSpacing: "0.02em",
            }}
          >
            {edu.school} • {edu.date}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: theme.palette.text.secondary }}
          >
            {edu.description}
          </Typography>
        </motion.div>
      ))}
    </Box>
  );
}

export default EducationPanel;
