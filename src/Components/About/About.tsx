import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import TechStack from "./TechStack";
import PersonalInterests from "./PersonalInterests";
import CoreValues from "./CoreValues";

const About: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 4,
        py: 8,
      }}
    >
      <Box sx={{ maxWidth: "1200px", width: "100%" }}>
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
              color: "text.primary",
            }}
          >
            About Me
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
            I'm a full-stack developer specializing in modern web technologies
            and enterprise-grade applications. With expertise in React, Redux
            Toolkit, and .NET Core, I build scalable, maintainable solutions
            that deliver exceptional user experiences.
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
            My backend expertise includes .NET Core, Entity Framework, and C#,
            allowing me to create robust RESTful APIs and microservices. I
            follow clean architecture principles and implement SOLID design
            patterns to ensure code quality and maintainability.
          </Typography>

          <TechStack />
          <PersonalInterests />
          <CoreValues />
        </motion.div>
      </Box>
    </Box>
  );
};

export default About;
