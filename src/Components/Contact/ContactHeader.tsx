import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";

interface ContactHeaderProps {
  title: string;
  subtitle: string;
}

const ContactHeader = ({ title, subtitle }: ContactHeaderProps) => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "3rem", sm: "4rem", md: "5rem" },
          fontWeight: 700,
          marginBottom: 4,
          letterSpacing: "-0.03em",
          lineHeight: 1,
          background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: theme.palette.text.secondary,
          mb: 4,
          lineHeight: 1.6,
        }}
      >
        {subtitle}
      </Typography>
    </motion.div>
  );
};

export default ContactHeader;
