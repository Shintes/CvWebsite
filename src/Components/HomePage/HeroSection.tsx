import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";

interface HeroSectionProps {
  name: string;
  title: string;
  about: string;
}

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(4),
  position: "relative",
  overflow: "hidden",
}));

const HeroContent = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  maxWidth: "1200px",
  margin: "0 auto",
  textAlign: "left",
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(6),
  },
}));

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const HeroSectionComponent = ({ name, title, about }: HeroSectionProps) => {
  return (
    <HeroSection>
      <HeroContent>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.div variants={textVariants}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "3rem", sm: "4rem", md: "6rem" },
                fontWeight: 700,
                marginBottom: 2,
                letterSpacing: "-0.03em",
                lineHeight: 1,
                color: "text.primary",
              }}
            >
              {name}
            </Typography>
          </motion.div>
          <motion.div variants={textVariants}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                color: "text.secondary",
                marginBottom: 4,
                fontWeight: 400,
                letterSpacing: "-0.02em",
                maxWidth: "800px",
              }}
            >
              {title}
            </Typography>
          </motion.div>
          <motion.div variants={textVariants}>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
                color: "text.secondary",
                marginBottom: 4,
                maxWidth: "600px",
                lineHeight: 1.7,
              }}
            >
              {about}
            </Typography>
          </motion.div>
          <motion.div
            variants={textVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          ></motion.div>
        </motion.div>
      </HeroContent>
    </HeroSection>
  );
};

export default HeroSectionComponent;
