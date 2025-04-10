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
          fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" },
          fontWeight: 700,
          marginBottom: 2,
          color: "text.primary",
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
