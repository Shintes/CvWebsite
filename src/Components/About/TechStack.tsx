import { Box, Typography, Chip, Stack, Link } from "@mui/material";
import { motion } from "framer-motion";

const TechStack: React.FC = () => {
  const techStack = [
    {
      name: "React",
      icon: "⚛️",
      url: "https://react.dev/",
    },
    {
      name: "Redux Toolkit",
      icon: "🔄",
      url: "https://redux-toolkit.js.org/",
    },
    {
      name: "TypeScript",
      icon: "📘",
      url: "https://www.typescriptlang.org/",
    },
    {
      name: ".NET Core",
      icon: "🌐",
      url: "https://dotnet.microsoft.com/",
    },
    {
      name: "Entity Framework",
      icon: "🗄️",
      url: "https://learn.microsoft.com/en-us/ef/",
    },
    {
      name: "C#",
      icon: "💻",
      url: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    },
    {
      name: "ASP.NET",
      icon: "🖥️",
      url: "https://dotnet.microsoft.com/en-us/apps/aspnet",
    },
    {
      name: "RESTful APIs",
      icon: "🔌",
      url: "https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design",
    },
    {
      name: "Material-UI",
      icon: "🎨",
      url: "https://mui.com/",
    },
    {
      name: "Framer Motion",
      icon: "✨",
      url: "https://www.framer.com/motion/",
    },
    {
      name: "SQL Server",
      icon: "🗃️",
      url: "https://www.microsoft.com/en-us/sql-server",
    },
    {
      name: "MariaDB",
      icon: "🐬",
      url: "https://mariadb.org/",
    },
    {
      name: "MongoDB",
      icon: "🍃",
      url: "https://www.mongodb.com/",
    },
    {
      name: "Azure",
      icon: "☁️",
      url: "https://azure.microsoft.com/",
    },
    {
      name: "Docker",
      icon: "🐳",
      url: "https://www.docker.com/",
    },
    {
      name: "Git",
      icon: "📦",
      url: "https://git-scm.com/",
    },
    {
      name: "CI/CD",
      icon: "⚡",
      url: "https://learn.microsoft.com/en-us/devops/deliver/what-is-continuous-delivery",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
          fontWeight: 600,
          marginBottom: 3,
          color: "text.primary",
          background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Tech Stack
      </Typography>

      <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
          >
            <Link
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
            >
              <Chip
                icon={<span>{tech.icon}</span>}
                label={tech.name}
                sx={{
                  m: 0.5,
                  backgroundColor: "rgba(33, 150, 243, 0.1)",
                  color: "primary.main",
                  fontWeight: 500,
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "rgba(33, 150, 243, 0.2)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.2s ease-in-out",
                }}
              />
            </Link>
          </motion.div>
        ))}
      </Stack>
    </motion.div>
  );
};

export default TechStack;
