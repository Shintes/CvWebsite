import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 4,
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "3rem", sm: "4rem", md: "6rem" },
              fontWeight: 700,
              marginBottom: 4,
              letterSpacing: "-0.03em",
              lineHeight: 1,
            }}
          >
            About
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
              color: "text.secondary",
              marginBottom: 4,
              maxWidth: "800px",
              lineHeight: 1.7,
            }}
          >
            I'm a passionate developer with a focus on creating modern web
            applications. My approach combines clean code principles with modern
            development practices. I'm constantly exploring new technologies and
            frameworks to stay at the forefront of web development.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
              color: "text.secondary",
              maxWidth: "800px",
              lineHeight: 1.7,
            }}
          >
            I believe in building efficient, scalable solutions that provide
            great user experiences. My work spans across frontend and backend
            development, with a particular interest in creating seamless,
            intuitive interfaces.
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
};

export default About;
