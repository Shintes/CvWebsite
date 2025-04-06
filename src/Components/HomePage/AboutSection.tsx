import { Box, Typography, Grid, Avatar, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";

interface AboutSectionProps {
  about: string;
}

const AboutSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
}));

const AboutContent = styled(Box)(() => ({
  maxWidth: "800px",
  margin: "0 auto",
  textAlign: "center",
}));

const ProfileImage = styled(Avatar)(({ theme }) => ({
  width: 200,
  height: 200,
  margin: "0 auto",
  border: `4px solid ${theme.palette.primary.main}`,
  boxShadow: `0 4px 20px ${theme.palette.primary.main}40`,
}));

const AboutSectionComponent = ({ about }: AboutSectionProps) => {
  const theme = useTheme();

  return (
    <AboutSection>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ProfileImage
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Profile"
              />
            </motion.div>
          </Grid>
          <Grid item xs={12} md={8}>
            <AboutContent>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "2rem", md: "2.5rem" },
                    fontWeight: 700,
                    marginBottom: 4,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  About Me
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "1rem", md: "1.2rem" },
                    color: "text.secondary",
                    lineHeight: 1.8,
                    mb: 4,
                  }}
                >
                  {about}
                </Typography>
              </motion.div>
            </AboutContent>
          </Grid>
        </Grid>
      </motion.div>
    </AboutSection>
  );
};

export default AboutSectionComponent;
