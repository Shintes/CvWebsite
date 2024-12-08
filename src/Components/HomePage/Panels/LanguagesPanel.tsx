import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { Language } from "../../Dto/Language";

interface LanguagesPanelProps {
  languages: Language[];
}

function LanguagesPanel({ languages }: LanguagesPanelProps) {
  const theme = useTheme();

  return (
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
      {languages.map((lang, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "1.1rem", md: "1.25rem" },
              fontWeight: 300,
              mb: 1,
              letterSpacing: "-0.02em",
            }}
          >
            {lang.name}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: theme.palette.text.secondary }}
          >
            {lang.level}
          </Typography>
        </motion.div>
      ))}
    </Box>
  );
}

export default LanguagesPanel;
