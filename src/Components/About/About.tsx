import { Box, Container, Typography, Paper, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

const About: React.FC = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 6, textAlign: "center" }}>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            mb: 2,
            fontWeight: "bold",
            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          About Me
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
          Passionate Developer | Problem Solver | Tech Enthusiast
        </Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {/* Introduction Section */}
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 2,
            transform: "translateY(0)",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "translateY(-4px)",
            },
          }}
        >
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
            Hello! I'm [Your Name], a passionate full-stack developer focused on
            creating modern web applications. I enjoy working with cutting-edge
            technologies and building efficient, scalable solutions that provide
            great user experiences.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            My approach combines clean code principles with modern development
            practices. I'm constantly exploring new technologies and frameworks
            to stay at the forefront of web development.
          </Typography>
        </Paper>

        {/* Technologies Section */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            "& > *": {
              flex: "1 1 300px",
              minWidth: 0,
            },
          }}
        >
          {/* Frontend Technologies */}
          <Paper
            elevation={3}
            sx={{
              p: 3,
              borderRadius: 2,
              transform: "translateY(0)",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-4px)",
              },
            }}
          >
            <Stack spacing={2}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  "& svg": {
                    fontSize: "2rem",
                    transition: "transform 0.3s ease",
                  },
                  "&:hover svg": {
                    transform: "rotate(10deg)",
                  },
                }}
              >
                <CodeIcon color="primary" />
                <Typography variant="h6">Frontend</Typography>
              </Box>
              <Typography variant="body2" sx={{ pl: 1 }}>
                • React & Next.js
                <br />
                • TypeScript
                <br />
                • Material-UI & Tailwind
                <br />
                • Redux & React Query
                <br />
                • Responsive Design
                <br />• WebGL & Three.js
              </Typography>
            </Stack>
          </Paper>

          {/* Backend Technologies */}
          <Paper
            elevation={3}
            sx={{
              p: 3,
              borderRadius: 2,
              transform: "translateY(0)",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-4px)",
              },
            }}
          >
            <Stack spacing={2}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  "& svg": {
                    fontSize: "2rem",
                    transition: "transform 0.3s ease",
                  },
                  "&:hover svg": {
                    transform: "rotate(10deg)",
                  },
                }}
              >
                <WorkIcon color="primary" />
                <Typography variant="h6">Backend</Typography>
              </Box>
              <Typography variant="body2" sx={{ pl: 1 }}>
                • Node.js & Express
                <br />
                • Python & FastAPI
                <br />
                • PostgreSQL & MongoDB
                <br />
                • REST & GraphQL APIs
                <br />
                • Docker & Kubernetes
                <br />• AWS Services
              </Typography>
            </Stack>
          </Paper>

          {/* Development Tools */}
          <Paper
            elevation={3}
            sx={{
              p: 3,
              borderRadius: 2,
              transform: "translateY(0)",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-4px)",
              },
            }}
          >
            <Stack spacing={2}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  "& svg": {
                    fontSize: "2rem",
                    transition: "transform 0.3s ease",
                  },
                  "&:hover svg": {
                    transform: "rotate(10deg)",
                  },
                }}
              >
                <SchoolIcon color="primary" />
                <Typography variant="h6">Tools & Practices</Typography>
              </Box>
              <Typography variant="body2" sx={{ pl: 1 }}>
                • Git & GitHub Actions
                <br />
                • Jest & Testing Library
                <br />
                • CI/CD Pipelines
                <br />
                • Agile Methodologies
                <br />
                • VS Code & DevTools
                <br />• Performance Optimization
              </Typography>
            </Stack>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
};

export default About;
