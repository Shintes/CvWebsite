import { Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { Section } from "./StyledComponents";

interface HeroSectionProps {
  name: string;
  title: string;
}

function HeroSection({ name, title }: HeroSectionProps) {
  const theme = useTheme();

  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            fontWeight: 300,
            marginBottom: "1rem",
            letterSpacing: "-0.02em",
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "1.25rem", md: "1.5rem" },
            fontWeight: 300,
            color: theme.palette.text.secondary,
            marginBottom: "2rem",
            letterSpacing: "0.02em",
          }}
        >
          {title}
        </Typography>
      </motion.div>
    </Section>
  );
}

export default HeroSection;
